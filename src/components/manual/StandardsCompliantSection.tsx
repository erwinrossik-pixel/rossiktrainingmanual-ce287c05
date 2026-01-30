import { Shield, Award, Globe, Lock, CheckCircle, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { standardsComplianceTranslations } from '@/data/translations/chapters/standards-compliance';
import { Badge } from '@/components/ui/badge';

interface StandardsCompliantSectionProps {
  standards: ('FIATA' | 'IATA' | 'ISO9001' | 'ISO28000')[];
  variant?: 'compact' | 'full';
}

const standardsConfig = {
  FIATA: { 
    icon: Globe, 
    color: 'bg-info', 
    textColor: 'text-info',
    name: 'FIATA Model Rules' 
  },
  IATA: { 
    icon: Shield, 
    color: 'bg-primary', 
    textColor: 'text-primary',
    name: 'IATA Cargo Framework' 
  },
  ISO9001: { 
    icon: Award, 
    color: 'bg-success', 
    textColor: 'text-success',
    name: 'ISO 9001:2015' 
  },
  ISO28000: { 
    icon: Lock, 
    color: 'bg-warning', 
    textColor: 'text-warning',
    name: 'ISO 28000:2022' 
  }
};

export function StandardsCompliantSection({ standards, variant = 'compact' }: StandardsCompliantSectionProps) {
  const { language } = useLanguage();
  const t = standardsComplianceTranslations[language] || standardsComplianceTranslations.en;
  
  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center gap-2 p-3 bg-muted/50 rounded-lg border border-border/50">
        <span className="text-xs font-medium text-muted-foreground mr-1">
          {language === 'ro' ? 'Aliniat la:' : language === 'de' ? 'Konform mit:' : 'Aligned to:'}
        </span>
        {standards.map(std => {
          const config = standardsConfig[std];
          const Icon = config.icon;
          return (
            <Badge 
              key={std} 
              variant="outline" 
              className={`${config.textColor} border-current flex items-center gap-1`}
            >
              <Icon className="w-3 h-3" />
              {config.name}
            </Badge>
          );
        })}
      </div>
    );
  }
  
  return (
    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-primary" />
        {language === 'ro' ? 'Conformitate Standarde Internaționale' : 
         language === 'de' ? 'Internationale Standardkonformität' : 
         'International Standards Compliance'}
      </h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        {standards.map(std => {
          const config = standardsConfig[std];
          const Icon = config.icon;
          return (
            <div 
              key={std}
              className="bg-background rounded-lg p-4 border border-border flex items-start gap-3"
            >
              <div className={`p-2 rounded-lg ${config.color} text-${config.color.replace('bg-', '')}-foreground`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`font-semibold ${config.textColor}`}>{config.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {std === 'FIATA' && (language === 'ro' ? 'Reguli Model pentru Servicii de Expediere' : 
                    language === 'de' ? 'Musterregeln für Speditionsleistungen' : 
                    'Model Rules for Freight Forwarding Services')}
                  {std === 'IATA' && (language === 'ro' ? 'Cadru de Training Cargo' : 
                    language === 'de' ? 'Cargo-Schulungsrahmenwerk' : 
                    'Cargo Training Framework')}
                  {std === 'ISO9001' && (language === 'ro' ? 'Managementul Calității' : 
                    language === 'de' ? 'Qualitätsmanagement' : 
                    'Quality Management')}
                  {std === 'ISO28000' && (language === 'ro' ? 'Securitatea Lanțului de Aprovizionare' : 
                    language === 'de' ? 'Lieferkettensicherheit' : 
                    'Supply Chain Security')}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Security-focused section for ISO 28000 compliance
export function SecurityComplianceSection() {
  const { language } = useLanguage();
  const t = standardsComplianceTranslations[language] || standardsComplianceTranslations.en;
  
  return (
    <section className="space-y-4">
      <h2 className="section-title flex items-center gap-3">
        <Lock className="w-6 h-6 text-warning" />
        {t.securityManagementTitle}
      </h2>
      
      <div className="info-card border-warning/30 bg-warning/5 dark:bg-warning/10">
        <p className="text-muted-foreground">{t.securityManagementIntro}</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="info-card">
          <h3 className="font-semibold text-warning mb-2">{t.threatAssessmentTitle}</h3>
          <p className="text-sm text-muted-foreground">{t.threatAssessmentContent}</p>
        </div>
        <div className="info-card">
          <h3 className="font-semibold text-warning mb-2">{t.physicalSecurityTitle}</h3>
          <p className="text-sm text-muted-foreground">{t.physicalSecurityContent}</p>
        </div>
        <div className="info-card">
          <h3 className="font-semibold text-warning mb-2">{t.personnelSecurityTitle}</h3>
          <p className="text-sm text-muted-foreground">{t.personnelSecurityContent}</p>
        </div>
        <div className="info-card">
          <h3 className="font-semibold text-warning mb-2">{t.informationSecurityTitle}</h3>
          <p className="text-sm text-muted-foreground">{t.informationSecurityContent}</p>
        </div>
      </div>
      
      <div className="bg-warning/10 dark:bg-warning/5 border border-warning/30 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
          <div>
            <h4 className="font-semibold text-warning">{t.incidentResponseTitle}</h4>
            <p className="text-sm text-muted-foreground">{t.incidentResponseContent}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Quality-focused section for ISO 9001 compliance
export function QualityComplianceSection() {
  const { language } = useLanguage();
  const t = standardsComplianceTranslations[language] || standardsComplianceTranslations.en;
  
  return (
    <section className="space-y-4">
      <h2 className="section-title flex items-center gap-3">
        <Award className="w-6 h-6 text-success" />
        {t.qualityManagementTitle}
      </h2>
      
      <div className="info-card border-success/30 bg-success/5 dark:bg-success/10">
        <p className="text-muted-foreground">{t.qualityManagementIntro}</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="info-card">
          <h3 className="font-semibold text-success mb-2">{t.customerFocusTitle}</h3>
          <p className="text-sm text-muted-foreground">{t.customerFocusContent}</p>
        </div>
        <div className="info-card">
          <h3 className="font-semibold text-success mb-2">{t.processApproachTitle}</h3>
          <p className="text-sm text-muted-foreground">{t.processApproachContent}</p>
        </div>
        <div className="info-card">
          <h3 className="font-semibold text-success mb-2">{t.riskBasedThinkingTitle}</h3>
          <p className="text-sm text-muted-foreground">{t.riskBasedThinkingContent}</p>
        </div>
        <div className="info-card">
          <h3 className="font-semibold text-success mb-2">{t.continualImprovementTitle}</h3>
          <p className="text-sm text-muted-foreground">{t.continualImprovementContent}</p>
        </div>
      </div>
    </section>
  );
}

// Multimodal section for IATA compliance
export function MultimodalComplianceSection() {
  const { language } = useLanguage();
  const t = standardsComplianceTranslations[language] || standardsComplianceTranslations.en;
  
  return (
    <section className="space-y-4">
      <h2 className="section-title flex items-center gap-3">
        <Shield className="w-6 h-6 text-primary" />
        {t.multimodalIntegrationTitle}
      </h2>
      
      <div className="info-card border-primary/30 bg-primary/5 dark:bg-primary/10">
        <p className="text-muted-foreground">{t.multimodalIntegrationContent}</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="info-card">
          <h3 className="font-semibold text-primary mb-2">{t.airCargoBasicsTitle}</h3>
          <p className="text-sm text-muted-foreground">{t.airCargoBasicsContent}</p>
        </div>
        <div className="info-card">
          <h3 className="font-semibold text-primary mb-2">{t.temperatureControlStandardsTitle}</h3>
          <p className="text-sm text-muted-foreground">{t.temperatureControlStandardsContent}</p>
        </div>
        <div className="info-card">
          <h3 className="font-semibold text-primary mb-2">{t.dangerousGoodsMultimodalTitle}</h3>
          <p className="text-sm text-muted-foreground">{t.dangerousGoodsMultimodalContent}</p>
        </div>
        <div className="info-card">
          <h3 className="font-semibold text-primary mb-2">{t.expressServicesStandardsTitle}</h3>
          <p className="text-sm text-muted-foreground">{t.expressServicesStandardsContent}</p>
        </div>
      </div>
    </section>
  );
}

// FIATA-focused section
export function FIATAComplianceSection() {
  const { language } = useLanguage();
  const t = standardsComplianceTranslations[language] || standardsComplianceTranslations.en;
  
  return (
    <section className="space-y-4">
      <h2 className="section-title flex items-center gap-3">
        <Globe className="w-6 h-6 text-info" />
        {t.fiataRulesTitle}
      </h2>
      
      <div className="info-card border-info/30 bg-info/5 dark:bg-info/10">
        <p className="text-muted-foreground">{t.fiataRulesContent}</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="info-card">
          <h3 className="font-semibold text-info mb-2">{t.liabilityFrameworkTitle}</h3>
          <p className="text-sm text-muted-foreground">{t.liabilityFrameworkContent}</p>
        </div>
        <div className="info-card">
          <h3 className="font-semibold text-info mb-2">{t.claimsManagementTitle}</h3>
          <p className="text-sm text-muted-foreground">{t.claimsManagementContent}</p>
        </div>
      </div>
    </section>
  );
}
