import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useCompany, Company, CompanyBranding, CompanySettings, CompanySubscription } from '@/contexts/CompanyContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Building2, Palette, Settings, Users, CreditCard, Plus, Globe, Edit, Trash2, Upload, Image, X } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface ExtendedCompany extends Company {
  branding?: CompanyBranding;
  settings?: CompanySettings;
  subscription?: CompanySubscription & { plan?: any };
  userCount?: number;
}

export function CompanyManagement() {
  const { isSuperAdmin } = useCompany();
  const { toast } = useToast();
  const [companies, setCompanies] = useState<ExtendedCompany[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<ExtendedCompany | null>(null);
  const [plans, setPlans] = useState<any[]>([]);

  // New company form
  const [newCompany, setNewCompany] = useState({
    name: '',
    slug: '',
    custom_domain: '',
    plan_type: 'starter'
  });

  useEffect(() => {
    if (isSuperAdmin) {
      fetchCompanies();
      fetchPlans();
    }
  }, [isSuperAdmin]);

  const fetchCompanies = async () => {
    setLoading(true);
    try {
      const { data: companiesData, error } = await supabase
        .from('companies')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Fetch additional data for each company
      const enrichedCompanies = await Promise.all(
        (companiesData || []).map(async (company) => {
          const [brandingRes, settingsRes, subscriptionRes, usersRes] = await Promise.all([
            supabase.from('company_branding').select('*').eq('company_id', company.id).single(),
            supabase.from('company_settings').select('*').eq('company_id', company.id).single(),
            supabase.from('company_subscriptions').select('*, plan:subscription_plans(*)').eq('company_id', company.id).single(),
            supabase.from('company_users').select('id', { count: 'exact' }).eq('company_id', company.id).eq('status', 'approved')
          ]);

          return {
            ...company,
            branding: brandingRes.data,
            settings: settingsRes.data,
            subscription: subscriptionRes.data,
            userCount: usersRes.count || 0
          } as ExtendedCompany;
        })
      );

      setCompanies(enrichedCompanies);
    } catch (error) {
      console.error('Error fetching companies:', error);
      toast({ title: 'Eroare', description: 'Nu s-au putut încărca companiile', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const fetchPlans = async () => {
    const { data } = await supabase.from('subscription_plans').select('*').eq('is_active', true);
    setPlans(data || []);
  };

  const createCompany = async () => {
    try {
      // Create company
      const { data: company, error: companyError } = await supabase
        .from('companies')
        .insert({
          name: newCompany.name,
          slug: newCompany.slug.toLowerCase().replace(/[^a-z0-9]/g, '-'),
          custom_domain: newCompany.custom_domain || null,
          is_active: true
        })
        .select()
        .single();

      if (companyError) throw companyError;

      // Create branding
      await supabase.from('company_branding').insert({
        company_id: company.id,
        platform_name: newCompany.name + ' Training'
      });

      // Create settings with registration code
      await supabase.from('company_settings').insert({
        company_id: company.id,
        registration_code: `${newCompany.slug.toUpperCase()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
      });

      // Create subscription
      const selectedPlan = plans.find(p => p.plan_type === newCompany.plan_type);
      if (selectedPlan) {
        await supabase.from('company_subscriptions').insert({
          company_id: company.id,
          plan_id: selectedPlan.id,
          status: 'active',
          billing_cycle: 'monthly'
        });
      }

      toast({ title: 'Companie creată', description: `${newCompany.name} a fost creată cu succes` });
      setIsCreateOpen(false);
      setNewCompany({ name: '', slug: '', custom_domain: '', plan_type: 'starter' });
      fetchCompanies();
    } catch (error: any) {
      toast({ title: 'Eroare', description: error.message, variant: 'destructive' });
    }
  };

  const toggleCompanyStatus = async (company: ExtendedCompany) => {
    try {
      await supabase
        .from('companies')
        .update({ is_active: !company.is_active })
        .eq('id', company.id);

      toast({ title: 'Status actualizat', description: `${company.name} este acum ${!company.is_active ? 'activă' : 'inactivă'}` });
      fetchCompanies();
    } catch (error) {
      toast({ title: 'Eroare', description: 'Nu s-a putut actualiza statusul', variant: 'destructive' });
    }
  };

  if (!isSuperAdmin) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Acces restricționat</CardTitle>
          <CardDescription>Doar Super Admin poate gestiona companiile.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl p-6 shadow-xl">
        <div>
          <h2 className="text-2xl font-black flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Building2 className="h-6 w-6" />
            </div>
            Gestionare Companii
          </h2>
          <p className="text-white/80 font-medium mt-1">Administrează toate companiile din platformă</p>
        </div>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button className="bg-white text-indigo-700 hover:bg-white/90 font-bold shadow-lg">
              <Plus className="h-4 w-4 mr-2" />
              Companie Nouă
            </Button>
          </DialogTrigger>
          <DialogContent className="border-2 shadow-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Creează Companie Nouă</DialogTitle>
              <DialogDescription>Adaugă o nouă companie în platformă</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label className="font-semibold">Nume Companie</Label>
                <Input
                  value={newCompany.name}
                  onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
                  placeholder="Ex: Transport SRL"
                  className="border-2"
                />
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Slug (URL)</Label>
                <Input
                  value={newCompany.slug}
                  onChange={(e) => setNewCompany({ ...newCompany, slug: e.target.value })}
                  placeholder="transport-srl"
                  className="border-2"
                />
                <p className="text-xs text-muted-foreground">Va fi folosit în URL: {newCompany.slug || 'slug'}.rossiktraining.com</p>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Domeniu Custom (opțional)</Label>
                <Input
                  value={newCompany.custom_domain}
                  onChange={(e) => setNewCompany({ ...newCompany, custom_domain: e.target.value })}
                  placeholder="training.company.com"
                  className="border-2"
                />
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Plan</Label>
                <Select
                  value={newCompany.plan_type}
                  onValueChange={(value) => setNewCompany({ ...newCompany, plan_type: value })}
                >
                  <SelectTrigger className="border-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 shadow-xl">
                    {plans.map((plan) => (
                      <SelectItem key={plan.id} value={plan.plan_type}>
                        {plan.name} - €{plan.price_monthly}/lună
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateOpen(false)}>Anulează</Button>
              <Button onClick={createCompany} disabled={!newCompany.name || !newCompany.slug} className="bg-indigo-600 hover:bg-indigo-700">Creează</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Companies Table */}
      <Card className="admin-section-card border-indigo-200">
        <CardHeader className="admin-section-header bg-gradient-to-r from-indigo-50 to-blue-50">
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="p-2 bg-indigo-500 rounded-lg shadow-md">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-indigo-800">Companii ({companies.length})</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-100 hover:bg-slate-100">
                  <TableHead className="font-bold text-slate-800">Companie</TableHead>
                  <TableHead className="font-bold text-slate-800">Domeniu</TableHead>
                  <TableHead className="font-bold text-slate-800">Plan</TableHead>
                  <TableHead className="font-bold text-slate-800">Utilizatori</TableHead>
                  <TableHead className="font-bold text-slate-800">Status</TableHead>
                  <TableHead className="font-bold text-slate-800 text-right">Acțiuni</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {companies.map((company) => (
                  <TableRow key={company.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        {company.branding?.logo_url ? (
                          <img src={company.branding.logo_url} alt={company.name} className="h-8 w-8 rounded" />
                        ) : (
                          <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                            <Building2 className="h-4 w-4 text-primary" />
                          </div>
                        )}
                        <div>
                          <p className="font-medium">{company.name}</p>
                          <p className="text-xs text-muted-foreground">{company.slug}</p>
                        </div>
                        {company.is_master && <Badge variant="secondary">Master</Badge>}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm">
                        <Globe className="h-3 w-3" />
                        {company.custom_domain || `${company.slug}.rossiktraining.com`}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {company.subscription?.plan?.name || 'N/A'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{company.userCount}</span>
                      {company.subscription?.plan?.max_users && (
                        <span className="text-muted-foreground">/{company.subscription.plan.max_users}</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Switch
                        checked={company.is_active}
                        onCheckedChange={() => toggleCompanyStatus(company)}
                        disabled={company.is_master}
                      />
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedCompany(company)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Company Detail/Edit Dialog */}
      {selectedCompany && (
        <CompanyDetailDialog
          company={selectedCompany}
          plans={plans}
          onClose={() => setSelectedCompany(null)}
          onSave={() => {
            setSelectedCompany(null);
            fetchCompanies();
          }}
        />
      )}
    </div>
  );
}

function CompanyDetailDialog({
  company,
  plans,
  onClose,
  onSave
}: {
  company: ExtendedCompany;
  plans: any[];
  onClose: () => void;
  onSave: () => void;
}) {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    name: company.name,
    slug: company.slug,
    custom_domain: company.custom_domain || '',
    platform_name: company.branding?.platform_name || '',
    logo_url: company.branding?.logo_url || '',
    primary_color: company.branding?.primary_color || '#3b82f6',
    secondary_color: company.branding?.secondary_color || '#1e40af',
    accent_color: company.branding?.accent_color || '#f59e0b',
    active_languages: company.settings?.active_languages || ['ro', 'en', 'de'],
    default_language: company.settings?.default_language || 'ro',
    require_approval: company.settings?.require_approval ?? true,
    welcome_message: company.settings?.welcome_message || '',
    registration_code: company.settings?.registration_code || '',
    plan_id: company.subscription?.plan_id || ''
  });

  const saveChanges = async () => {
    try {
      // Update company
      await supabase.from('companies').update({
        name: formData.name,
        slug: formData.slug,
        custom_domain: formData.custom_domain || null
      }).eq('id', company.id);

      // Update branding
      await supabase.from('company_branding').update({
        platform_name: formData.platform_name,
        logo_url: formData.logo_url || null,
        primary_color: formData.primary_color,
        secondary_color: formData.secondary_color,
        accent_color: formData.accent_color
      }).eq('company_id', company.id);

      // Update settings
      await supabase.from('company_settings').update({
        active_languages: formData.active_languages,
        default_language: formData.default_language,
        require_approval: formData.require_approval,
        welcome_message: formData.welcome_message || null
      }).eq('company_id', company.id);

      // Update subscription if plan changed
      if (formData.plan_id && formData.plan_id !== company.subscription?.plan_id) {
        await supabase.from('company_subscriptions').update({
          plan_id: formData.plan_id
        }).eq('company_id', company.id);
      }

      toast({ title: 'Salvat', description: 'Modificările au fost salvate' });
      onSave();
    } catch (error: any) {
      toast({ title: 'Eroare', description: error.message, variant: 'destructive' });
    }
  };

  return (
    <Dialog open onOpenChange={() => onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Editează {company.name}</DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="branding">Branding</TabsTrigger>
            <TabsTrigger value="settings">Setări</TabsTrigger>
            <TabsTrigger value="subscription">Plan</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <div className="space-y-2">
              <Label>Nume Companie</Label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Slug</Label>
              <Input
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                disabled={company.is_master}
              />
            </div>
            <div className="space-y-2">
              <Label>Domeniu Custom</Label>
              <Input
                value={formData.custom_domain}
                onChange={(e) => setFormData({ ...formData, custom_domain: e.target.value })}
                placeholder="training.company.com"
              />
            </div>
          </TabsContent>

          <TabsContent value="branding" className="space-y-4">
            <div className="space-y-2">
              <Label>Nume Platformă</Label>
              <Input
                value={formData.platform_name}
                onChange={(e) => setFormData({ ...formData, platform_name: e.target.value })}
              />
            </div>
            
            {/* Logo Upload */}
            <LogoUpload 
              companyId={company.id}
              currentLogoUrl={formData.logo_url}
              onLogoChange={(url) => setFormData({ ...formData, logo_url: url })}
            />
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Culoare Primară</Label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    value={formData.primary_color}
                    onChange={(e) => setFormData({ ...formData, primary_color: e.target.value })}
                    className="w-12 h-10 p-1"
                  />
                  <Input
                    value={formData.primary_color}
                    onChange={(e) => setFormData({ ...formData, primary_color: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Culoare Secundară</Label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    value={formData.secondary_color}
                    onChange={(e) => setFormData({ ...formData, secondary_color: e.target.value })}
                    className="w-12 h-10 p-1"
                  />
                  <Input
                    value={formData.secondary_color}
                    onChange={(e) => setFormData({ ...formData, secondary_color: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Culoare Accent</Label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    value={formData.accent_color}
                    onChange={(e) => setFormData({ ...formData, accent_color: e.target.value })}
                    className="w-12 h-10 p-1"
                  />
                  <Input
                    value={formData.accent_color}
                    onChange={(e) => setFormData({ ...formData, accent_color: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="space-y-2">
              <Label>Cod de Înregistrare</Label>
              <Input value={formData.registration_code} disabled />
              <p className="text-xs text-muted-foreground">Utilizatorii pot folosi acest cod la înregistrare</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Necesită Aprobare</Label>
                <p className="text-xs text-muted-foreground">Utilizatorii noi trebuie aprobați manual</p>
              </div>
              <Switch
                checked={formData.require_approval}
                onCheckedChange={(checked) => setFormData({ ...formData, require_approval: checked })}
              />
            </div>
            <div className="space-y-2">
              <Label>Limba Implicită</Label>
              <Select
                value={formData.default_language}
                onValueChange={(value) => setFormData({ ...formData, default_language: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ro">Română</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Mesaj de Bun Venit</Label>
              <Textarea
                value={formData.welcome_message}
                onChange={(e) => setFormData({ ...formData, welcome_message: e.target.value })}
                placeholder="Mesaj afișat utilizatorilor noi..."
              />
            </div>
          </TabsContent>

          <TabsContent value="subscription" className="space-y-4">
            <div className="space-y-2">
              <Label>Plan Curent</Label>
              <Select
                value={formData.plan_id}
                onValueChange={(value) => setFormData({ ...formData, plan_id: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {plans.map((plan) => (
                    <SelectItem key={plan.id} value={plan.id}>
                      {plan.name} - €{plan.price_monthly}/lună ({plan.max_users || '∞'} utilizatori)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Funcționalități incluse:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>✓ Certificate: {company.subscription?.plan?.has_certificates ? 'Da' : 'Nu'}</li>
                <li>✓ AI Tutor: {company.subscription?.plan?.has_ai_tutor ? 'Da' : 'Nu'}</li>
                <li>✓ Analytics: {company.subscription?.plan?.has_analytics ? 'Da' : 'Nu'}</li>
                <li>✓ Branding Custom: {company.subscription?.plan?.has_custom_branding ? 'Da' : 'Nu'}</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Anulează</Button>
          <Button onClick={saveChanges}>Salvează</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Logo Upload Component
function LogoUpload({ 
  companyId, 
  currentLogoUrl, 
  onLogoChange 
}: { 
  companyId: string; 
  currentLogoUrl: string; 
  onLogoChange: (url: string) => void;
}) {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(currentLogoUrl);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/webp', 'image/svg+xml'];
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: 'Tip de fișier invalid',
        description: 'Încarcă o imagine PNG, JPG, GIF, WebP sau SVG',
        variant: 'destructive'
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: 'Fișier prea mare',
        description: 'Dimensiunea maximă este 5MB',
        variant: 'destructive'
      });
      return;
    }

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `logo.${fileExt}`;
      const filePath = `${companyId}/${fileName}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('company-assets')
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('company-assets')
        .getPublicUrl(filePath);

      setPreviewUrl(publicUrl);
      onLogoChange(publicUrl);
      
      toast({ title: 'Logo încărcat', description: 'Logo-ul a fost salvat cu succes' });
    } catch (error: any) {
      console.error('Upload error:', error);
      toast({
        title: 'Eroare la încărcare',
        description: error.message || 'Nu s-a putut încărca logo-ul',
        variant: 'destructive'
      });
    } finally {
      setUploading(false);
    }
  };

  const removeLogo = async () => {
    try {
      // Delete from storage
      await supabase.storage
        .from('company-assets')
        .remove([`${companyId}/logo.png`, `${companyId}/logo.jpg`, `${companyId}/logo.jpeg`, `${companyId}/logo.svg`]);

      setPreviewUrl('');
      onLogoChange('');
      toast({ title: 'Logo șters', description: 'Logo-ul a fost eliminat' });
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  return (
    <div className="space-y-2">
      <Label>Logo Companie</Label>
      <div className="flex items-start gap-4">
        {/* Preview */}
        <div className="w-24 h-24 border-2 border-dashed border-border rounded-lg flex items-center justify-center bg-muted/30 overflow-hidden">
          {previewUrl ? (
            <img src={previewUrl} alt="Logo" className="w-full h-full object-contain" />
          ) : (
            <Image className="w-8 h-8 text-muted-foreground" />
          )}
        </div>
        
        {/* Actions */}
        <div className="flex-1 space-y-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileSelect}
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
          >
            <Upload className="h-4 w-4 mr-2" />
            {uploading ? 'Se încarcă...' : 'Încarcă Logo'}
          </Button>
          {previewUrl && (
            <Button
              variant="ghost"
              size="sm"
              onClick={removeLogo}
              className="text-destructive"
            >
              <X className="h-4 w-4 mr-2" />
              Șterge
            </Button>
          )}
          <p className="text-xs text-muted-foreground">
            PNG, JPG, SVG. Max 5MB. Recomandat: 200x200px
          </p>
        </div>
      </div>
    </div>
  );
}
