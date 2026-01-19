export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      ai_recommendations: {
        Row: {
          ai_confidence: number | null
          applied_at: string | null
          applied_by: string | null
          created_at: string
          description: string
          dismissed_reason: string | null
          id: string
          kpi_data: Json | null
          recommendation_type: string
          severity: string
          status: string
          suggested_action: string | null
          target_entity: string
          title: string
          updated_at: string
        }
        Insert: {
          ai_confidence?: number | null
          applied_at?: string | null
          applied_by?: string | null
          created_at?: string
          description: string
          dismissed_reason?: string | null
          id?: string
          kpi_data?: Json | null
          recommendation_type: string
          severity?: string
          status?: string
          suggested_action?: string | null
          target_entity: string
          title: string
          updated_at?: string
        }
        Update: {
          ai_confidence?: number | null
          applied_at?: string | null
          applied_by?: string | null
          created_at?: string
          description?: string
          dismissed_reason?: string | null
          id?: string
          kpi_data?: Json | null
          recommendation_type?: string
          severity?: string
          status?: string
          suggested_action?: string | null
          target_entity?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      app_metadata: {
        Row: {
          id: string
          last_published_at: string | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          id?: string
          last_published_at?: string | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          id?: string
          last_published_at?: string | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: []
      }
      audio_cache: {
        Row: {
          audio_url: string | null
          chapter_id: string
          created_at: string | null
          duration_seconds: number | null
          id: string
          language: string
          text_hash: string
          voice_id: string | null
        }
        Insert: {
          audio_url?: string | null
          chapter_id: string
          created_at?: string | null
          duration_seconds?: number | null
          id?: string
          language: string
          text_hash: string
          voice_id?: string | null
        }
        Update: {
          audio_url?: string | null
          chapter_id?: string
          created_at?: string | null
          duration_seconds?: number | null
          id?: string
          language?: string
          text_hash?: string
          voice_id?: string | null
        }
        Relationships: []
      }
      auto_update_settings: {
        Row: {
          description: string | null
          id: string
          setting_key: string
          setting_value: Json
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          description?: string | null
          id?: string
          setting_key: string
          setting_value: Json
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          description?: string | null
          id?: string
          setting_key?: string
          setting_value?: Json
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      auto_updates: {
        Row: {
          ai_model_used: string | null
          applied_at: string | null
          approved_at: string | null
          approved_by: string | null
          change_id: string | null
          chapter_id: string
          content_level: Database["public"]["Enums"]["content_level"] | null
          created_at: string
          description: string | null
          id: string
          languages_updated: string[] | null
          original_content: Json | null
          requires_approval: boolean | null
          rollback_reason: string | null
          rolled_back_at: string | null
          sections_affected: string[] | null
          severity: Database["public"]["Enums"]["change_severity"]
          status: Database["public"]["Enums"]["update_status"]
          title: string
          updated_at: string
          updated_content: Json | null
        }
        Insert: {
          ai_model_used?: string | null
          applied_at?: string | null
          approved_at?: string | null
          approved_by?: string | null
          change_id?: string | null
          chapter_id: string
          content_level?: Database["public"]["Enums"]["content_level"] | null
          created_at?: string
          description?: string | null
          id?: string
          languages_updated?: string[] | null
          original_content?: Json | null
          requires_approval?: boolean | null
          rollback_reason?: string | null
          rolled_back_at?: string | null
          sections_affected?: string[] | null
          severity: Database["public"]["Enums"]["change_severity"]
          status?: Database["public"]["Enums"]["update_status"]
          title: string
          updated_at?: string
          updated_content?: Json | null
        }
        Update: {
          ai_model_used?: string | null
          applied_at?: string | null
          approved_at?: string | null
          approved_by?: string | null
          change_id?: string | null
          chapter_id?: string
          content_level?: Database["public"]["Enums"]["content_level"] | null
          created_at?: string
          description?: string | null
          id?: string
          languages_updated?: string[] | null
          original_content?: Json | null
          requires_approval?: boolean | null
          rollback_reason?: string | null
          rolled_back_at?: string | null
          sections_affected?: string[] | null
          severity?: Database["public"]["Enums"]["change_severity"]
          status?: Database["public"]["Enums"]["update_status"]
          title?: string
          updated_at?: string
          updated_content?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "auto_updates_change_id_fkey"
            columns: ["change_id"]
            isOneToOne: false
            referencedRelation: "detected_changes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "auto_updates_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "auto_updates_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "content_quality_summary"
            referencedColumns: ["chapter_id"]
          },
        ]
      }
      backup_logs: {
        Row: {
          backup_type: string
          completed_at: string | null
          created_at: string
          duration_ms: number | null
          error_message: string | null
          id: string
          size_bytes: number | null
          started_at: string
          status: string
          storage_location: string | null
          tables_backed_up: string[] | null
        }
        Insert: {
          backup_type: string
          completed_at?: string | null
          created_at?: string
          duration_ms?: number | null
          error_message?: string | null
          id?: string
          size_bytes?: number | null
          started_at?: string
          status?: string
          storage_location?: string | null
          tables_backed_up?: string[] | null
        }
        Update: {
          backup_type?: string
          completed_at?: string | null
          created_at?: string
          duration_ms?: number | null
          error_message?: string | null
          id?: string
          size_bytes?: number | null
          started_at?: string
          status?: string
          storage_location?: string | null
          tables_backed_up?: string[] | null
        }
        Relationships: []
      }
      bookmarked_questions: {
        Row: {
          bookmarked_at: string
          chapter_id: string
          correct_answer: string
          correct_index: number
          created_at: string
          explanation: string
          id: string
          notes: string | null
          options: Json
          question_text: string
          user_id: string
        }
        Insert: {
          bookmarked_at?: string
          chapter_id: string
          correct_answer: string
          correct_index: number
          created_at?: string
          explanation: string
          id?: string
          notes?: string | null
          options: Json
          question_text: string
          user_id: string
        }
        Update: {
          bookmarked_at?: string
          chapter_id?: string
          correct_answer?: string
          correct_index?: number
          created_at?: string
          explanation?: string
          id?: string
          notes?: string | null
          options?: Json
          question_text?: string
          user_id?: string
        }
        Relationships: []
      }
      celebration_events: {
        Row: {
          created_at: string | null
          event_data: Json | null
          event_type: string
          id: string
          shown: boolean | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          event_data?: Json | null
          event_type: string
          id?: string
          shown?: boolean | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          event_data?: Json | null
          event_type?: string
          id?: string
          shown?: boolean | null
          user_id?: string
        }
        Relationships: []
      }
      certificate_settings: {
        Row: {
          description: string | null
          id: string
          setting_key: string
          setting_value: Json
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          description?: string | null
          id?: string
          setting_key: string
          setting_value: Json
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          description?: string | null
          id?: string
          setting_key?: string
          setting_value?: Json
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      certificates: {
        Row: {
          average_score: number
          certificate_code: string
          chapters_completed: number
          created_at: string | null
          expires_at: string
          id: string
          is_revoked: boolean | null
          issued_at: string
          pdf_url: string | null
          quizzes_passed: number
          revoke_reason: string | null
          revoked_at: string | null
          revoked_by: string | null
          total_training_hours: number | null
          trainee_name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          average_score: number
          certificate_code: string
          chapters_completed: number
          created_at?: string | null
          expires_at: string
          id?: string
          is_revoked?: boolean | null
          issued_at?: string
          pdf_url?: string | null
          quizzes_passed: number
          revoke_reason?: string | null
          revoked_at?: string | null
          revoked_by?: string | null
          total_training_hours?: number | null
          trainee_name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          average_score?: number
          certificate_code?: string
          chapters_completed?: number
          created_at?: string | null
          expires_at?: string
          id?: string
          is_revoked?: boolean | null
          issued_at?: string
          pdf_url?: string | null
          quizzes_passed?: number
          revoke_reason?: string | null
          revoked_at?: string | null
          revoked_by?: string | null
          total_training_hours?: number | null
          trainee_name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      challenge_participants: {
        Row: {
          challenge_id: string | null
          completed: boolean | null
          completed_at: string | null
          current_value: number | null
          id: string
          joined_at: string | null
          user_id: string
        }
        Insert: {
          challenge_id?: string | null
          completed?: boolean | null
          completed_at?: string | null
          current_value?: number | null
          id?: string
          joined_at?: string | null
          user_id: string
        }
        Update: {
          challenge_id?: string | null
          completed?: boolean | null
          completed_at?: string | null
          current_value?: number | null
          id?: string
          joined_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "challenge_participants_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "weekly_challenges"
            referencedColumns: ["id"]
          },
        ]
      }
      chapter_discussions: {
        Row: {
          chapter_id: string
          content: string
          created_at: string | null
          id: string
          is_pinned: boolean | null
          is_resolved: boolean | null
          likes_count: number | null
          parent_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          chapter_id: string
          content: string
          created_at?: string | null
          id?: string
          is_pinned?: boolean | null
          is_resolved?: boolean | null
          likes_count?: number | null
          parent_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          chapter_id?: string
          content?: string
          created_at?: string | null
          id?: string
          is_pinned?: boolean | null
          is_resolved?: boolean | null
          likes_count?: number | null
          parent_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chapter_discussions_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "chapter_discussions"
            referencedColumns: ["id"]
          },
        ]
      }
      chapter_impacts: {
        Row: {
          affected_sections: Json | null
          ai_confidence: number | null
          change_id: string
          chapter_id: string
          created_at: string
          id: string
          impact_level: string
          is_override: boolean | null
          suggested_updates: string | null
        }
        Insert: {
          affected_sections?: Json | null
          ai_confidence?: number | null
          change_id: string
          chapter_id: string
          created_at?: string
          id?: string
          impact_level: string
          is_override?: boolean | null
          suggested_updates?: string | null
        }
        Update: {
          affected_sections?: Json | null
          ai_confidence?: number | null
          change_id?: string
          chapter_id?: string
          created_at?: string
          id?: string
          impact_level?: string
          is_override?: boolean | null
          suggested_updates?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chapter_impacts_change_id_fkey"
            columns: ["change_id"]
            isOneToOne: false
            referencedRelation: "detected_changes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chapter_impacts_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chapter_impacts_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "content_quality_summary"
            referencedColumns: ["chapter_id"]
          },
        ]
      }
      chapter_media: {
        Row: {
          chapter_id: string
          content: Json
          created_at: string | null
          duration_estimate: number | null
          id: string
          is_active: boolean | null
          language: string | null
          media_type: string
          order_index: number | null
          title: string
          updated_at: string | null
        }
        Insert: {
          chapter_id: string
          content: Json
          created_at?: string | null
          duration_estimate?: number | null
          id?: string
          is_active?: boolean | null
          language?: string | null
          media_type: string
          order_index?: number | null
          title: string
          updated_at?: string | null
        }
        Update: {
          chapter_id?: string
          content?: Json
          created_at?: string | null
          duration_estimate?: number | null
          id?: string
          is_active?: boolean | null
          language?: string | null
          media_type?: string
          order_index?: number | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      chapter_progress: {
        Row: {
          attempts_count: number | null
          best_score: number | null
          chapter_id: string
          completed_at: string | null
          created_at: string
          id: string
          last_attempt_at: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          attempts_count?: number | null
          best_score?: number | null
          chapter_id: string
          completed_at?: string | null
          created_at?: string
          id?: string
          last_attempt_at?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          attempts_count?: number | null
          best_score?: number | null
          chapter_id?: string
          completed_at?: string | null
          created_at?: string
          id?: string
          last_attempt_at?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chapter_progress_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chapter_progress_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "content_quality_summary"
            referencedColumns: ["chapter_id"]
          },
        ]
      }
      chapter_versions: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          change_summary: string | null
          chapter_id: string
          content_snapshot: Json
          created_at: string
          created_by: string | null
          id: string
          is_approved: boolean
          related_change_ids: string[] | null
          source_url: string | null
          update_source: string | null
          version_number: number
          word_count: number | null
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          change_summary?: string | null
          chapter_id: string
          content_snapshot: Json
          created_at?: string
          created_by?: string | null
          id?: string
          is_approved?: boolean
          related_change_ids?: string[] | null
          source_url?: string | null
          update_source?: string | null
          version_number: number
          word_count?: number | null
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          change_summary?: string | null
          chapter_id?: string
          content_snapshot?: Json
          created_at?: string
          created_by?: string | null
          id?: string
          is_approved?: boolean
          related_change_ids?: string[] | null
          source_url?: string | null
          update_source?: string | null
          version_number?: number
          word_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "chapter_versions_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chapter_versions_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "content_quality_summary"
            referencedColumns: ["chapter_id"]
          },
        ]
      }
      chapters: {
        Row: {
          auto_update_blocked: boolean
          auto_update_blocked_at: string | null
          auto_update_blocked_by: string | null
          content_level: Database["public"]["Enums"]["content_level"]
          created_at: string
          id: string
          is_intro: boolean | null
          module: string | null
          order_index: number
          slug: string
        }
        Insert: {
          auto_update_blocked?: boolean
          auto_update_blocked_at?: string | null
          auto_update_blocked_by?: string | null
          content_level?: Database["public"]["Enums"]["content_level"]
          created_at?: string
          id: string
          is_intro?: boolean | null
          module?: string | null
          order_index: number
          slug: string
        }
        Update: {
          auto_update_blocked?: boolean
          auto_update_blocked_at?: string | null
          auto_update_blocked_by?: string | null
          content_level?: Database["public"]["Enums"]["content_level"]
          created_at?: string
          id?: string
          is_intro?: boolean | null
          module?: string | null
          order_index?: number
          slug?: string
        }
        Relationships: []
      }
      companies: {
        Row: {
          created_at: string | null
          custom_domain: string | null
          id: string
          is_active: boolean | null
          is_master: boolean | null
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          custom_domain?: string | null
          id?: string
          is_active?: boolean | null
          is_master?: boolean | null
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          custom_domain?: string | null
          id?: string
          is_active?: boolean | null
          is_master?: boolean | null
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      company_branding: {
        Row: {
          accent_color: string | null
          background_color: string | null
          company_id: string
          created_at: string | null
          custom_css: string | null
          favicon_url: string | null
          font_family: string | null
          id: string
          logo_url: string | null
          platform_name: string | null
          primary_color: string | null
          secondary_color: string | null
          text_color: string | null
          updated_at: string | null
        }
        Insert: {
          accent_color?: string | null
          background_color?: string | null
          company_id: string
          created_at?: string | null
          custom_css?: string | null
          favicon_url?: string | null
          font_family?: string | null
          id?: string
          logo_url?: string | null
          platform_name?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          text_color?: string | null
          updated_at?: string | null
        }
        Update: {
          accent_color?: string | null
          background_color?: string | null
          company_id?: string
          created_at?: string | null
          custom_css?: string | null
          favicon_url?: string | null
          font_family?: string | null
          id?: string
          logo_url?: string | null
          platform_name?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          text_color?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_branding_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: true
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      company_chapters: {
        Row: {
          chapter_id: string
          company_id: string
          created_at: string | null
          custom_order: number | null
          id: string
          is_active: boolean | null
          is_premium: boolean | null
        }
        Insert: {
          chapter_id: string
          company_id: string
          created_at?: string | null
          custom_order?: number | null
          id?: string
          is_active?: boolean | null
          is_premium?: boolean | null
        }
        Update: {
          chapter_id?: string
          company_id?: string
          created_at?: string | null
          custom_order?: number | null
          id?: string
          is_active?: boolean | null
          is_premium?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "company_chapters_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      company_reports: {
        Row: {
          company_id: string
          created_at: string
          generated_by: string
          id: string
          pdf_url: string | null
          report_data: Json | null
          report_period_end: string
          report_period_start: string
          report_type: string
        }
        Insert: {
          company_id: string
          created_at?: string
          generated_by: string
          id?: string
          pdf_url?: string | null
          report_data?: Json | null
          report_period_end: string
          report_period_start: string
          report_type: string
        }
        Update: {
          company_id?: string
          created_at?: string
          generated_by?: string
          id?: string
          pdf_url?: string | null
          report_data?: Json | null
          report_period_end?: string
          report_period_start?: string
          report_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_reports_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      company_settings: {
        Row: {
          active_languages: string[] | null
          company_id: string
          created_at: string | null
          default_language: string | null
          id: string
          registration_code: string | null
          require_approval: boolean | null
          support_email: string | null
          timezone: string | null
          updated_at: string | null
          welcome_message: string | null
        }
        Insert: {
          active_languages?: string[] | null
          company_id: string
          created_at?: string | null
          default_language?: string | null
          id?: string
          registration_code?: string | null
          require_approval?: boolean | null
          support_email?: string | null
          timezone?: string | null
          updated_at?: string | null
          welcome_message?: string | null
        }
        Update: {
          active_languages?: string[] | null
          company_id?: string
          created_at?: string | null
          default_language?: string | null
          id?: string
          registration_code?: string | null
          require_approval?: boolean | null
          support_email?: string | null
          timezone?: string | null
          updated_at?: string | null
          welcome_message?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_settings_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: true
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      company_subscriptions: {
        Row: {
          billing_cycle: string | null
          cancel_at_period_end: boolean | null
          cancelled_at: string | null
          company_id: string
          created_at: string | null
          expires_at: string | null
          id: string
          payment_status: string | null
          plan_id: string
          started_at: string | null
          status: string | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          trial_ends_at: string | null
          updated_at: string | null
        }
        Insert: {
          billing_cycle?: string | null
          cancel_at_period_end?: boolean | null
          cancelled_at?: string | null
          company_id: string
          created_at?: string | null
          expires_at?: string | null
          id?: string
          payment_status?: string | null
          plan_id: string
          started_at?: string | null
          status?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          trial_ends_at?: string | null
          updated_at?: string | null
        }
        Update: {
          billing_cycle?: string | null
          cancel_at_period_end?: boolean | null
          cancelled_at?: string | null
          company_id?: string
          created_at?: string | null
          expires_at?: string | null
          id?: string
          payment_status?: string | null
          plan_id?: string
          started_at?: string | null
          status?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          trial_ends_at?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_subscriptions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: true
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      company_users: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          company_id: string
          created_at: string | null
          id: string
          invited_at: string | null
          invited_by: string | null
          notes: string | null
          role: Database["public"]["Enums"]["company_role"] | null
          status: Database["public"]["Enums"]["user_company_status"] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          company_id: string
          created_at?: string | null
          id?: string
          invited_at?: string | null
          invited_by?: string | null
          notes?: string | null
          role?: Database["public"]["Enums"]["company_role"] | null
          status?: Database["public"]["Enums"]["user_company_status"] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          company_id?: string
          created_at?: string | null
          id?: string
          invited_at?: string | null
          invited_by?: string | null
          notes?: string | null
          role?: Database["public"]["Enums"]["company_role"] | null
          status?: Database["public"]["Enums"]["user_company_status"] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_users_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      competency_scores: {
        Row: {
          competency_area: string
          created_at: string | null
          id: string
          last_assessment_at: string | null
          max_score: number | null
          score: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          competency_area: string
          created_at?: string | null
          id?: string
          last_assessment_at?: string | null
          max_score?: number | null
          score?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          competency_area?: string
          created_at?: string | null
          id?: string
          last_assessment_at?: string | null
          max_score?: number | null
          score?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      content_difficulty_analysis: {
        Row: {
          avg_attempts_to_pass: number | null
          avg_pass_rate: number | null
          avg_time_to_pass_hours: number | null
          bounce_rate: number | null
          chapter_id: string
          comprehension_issues: Json | null
          correlation_with_auto_updates: number | null
          created_at: string
          difficulty_rating: string
          id: string
          last_analyzed_at: string
          needs_review: boolean | null
          skip_rate: number | null
        }
        Insert: {
          avg_attempts_to_pass?: number | null
          avg_pass_rate?: number | null
          avg_time_to_pass_hours?: number | null
          bounce_rate?: number | null
          chapter_id: string
          comprehension_issues?: Json | null
          correlation_with_auto_updates?: number | null
          created_at?: string
          difficulty_rating?: string
          id?: string
          last_analyzed_at?: string
          needs_review?: boolean | null
          skip_rate?: number | null
        }
        Update: {
          avg_attempts_to_pass?: number | null
          avg_pass_rate?: number | null
          avg_time_to_pass_hours?: number | null
          bounce_rate?: number | null
          chapter_id?: string
          comprehension_issues?: Json | null
          correlation_with_auto_updates?: number | null
          created_at?: string
          difficulty_rating?: string
          id?: string
          last_analyzed_at?: string
          needs_review?: boolean | null
          skip_rate?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "content_difficulty_analysis_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: true
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "content_difficulty_analysis_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: true
            referencedRelation: "content_quality_summary"
            referencedColumns: ["chapter_id"]
          },
        ]
      }
      content_quality_analysis: {
        Row: {
          ai_model_used: string | null
          analysis_version: number
          analyzed_at: string
          analyzed_by: string | null
          chapter_id: string
          consistency_issues: Json | null
          created_at: string
          duplication_issues: Json | null
          id: string
          language: string
          outdated_content: Json | null
          quality_score: number
          review_notes: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          status: string
          suggested_corrections: Json | null
          terminology_issues: Json | null
          translation_issues: Json | null
          updated_at: string
        }
        Insert: {
          ai_model_used?: string | null
          analysis_version?: number
          analyzed_at?: string
          analyzed_by?: string | null
          chapter_id: string
          consistency_issues?: Json | null
          created_at?: string
          duplication_issues?: Json | null
          id?: string
          language?: string
          outdated_content?: Json | null
          quality_score?: number
          review_notes?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          suggested_corrections?: Json | null
          terminology_issues?: Json | null
          translation_issues?: Json | null
          updated_at?: string
        }
        Update: {
          ai_model_used?: string | null
          analysis_version?: number
          analyzed_at?: string
          analyzed_by?: string | null
          chapter_id?: string
          consistency_issues?: Json | null
          created_at?: string
          duplication_issues?: Json | null
          id?: string
          language?: string
          outdated_content?: Json | null
          quality_score?: number
          review_notes?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          suggested_corrections?: Json | null
          terminology_issues?: Json | null
          translation_issues?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "content_quality_analysis_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "content_quality_analysis_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "content_quality_summary"
            referencedColumns: ["chapter_id"]
          },
        ]
      }
      content_sources: {
        Row: {
          category: string
          check_frequency_hours: number
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          last_checked_at: string | null
          last_hash: string | null
          name: string
          reliability_score: number | null
          source_type: Database["public"]["Enums"]["source_type"]
          updated_at: string
          url: string
        }
        Insert: {
          category: string
          check_frequency_hours?: number
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          last_checked_at?: string | null
          last_hash?: string | null
          name: string
          reliability_score?: number | null
          source_type?: Database["public"]["Enums"]["source_type"]
          updated_at?: string
          url: string
        }
        Update: {
          category?: string
          check_frequency_hours?: number
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          last_checked_at?: string | null
          last_hash?: string | null
          name?: string
          reliability_score?: number | null
          source_type?: Database["public"]["Enums"]["source_type"]
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      cron_job_logs: {
        Row: {
          completed_at: string | null
          created_at: string
          duration_ms: number | null
          error_message: string | null
          execution_details: Json | null
          execution_type: string
          id: string
          items_failed: number | null
          items_processed: number | null
          job_name: string
          result_summary: string | null
          started_at: string
          status: string
          triggered_by: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          duration_ms?: number | null
          error_message?: string | null
          execution_details?: Json | null
          execution_type?: string
          id?: string
          items_failed?: number | null
          items_processed?: number | null
          job_name: string
          result_summary?: string | null
          started_at?: string
          status?: string
          triggered_by?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          duration_ms?: number | null
          error_message?: string | null
          execution_details?: Json | null
          execution_type?: string
          id?: string
          items_failed?: number | null
          items_processed?: number | null
          job_name?: string
          result_summary?: string | null
          started_at?: string
          status?: string
          triggered_by?: string | null
        }
        Relationships: []
      }
      detected_changes: {
        Row: {
          change_type: string
          check_log_id: string | null
          description: string | null
          detected_at: string
          id: string
          is_processed: boolean | null
          new_value: string | null
          old_value: string | null
          processed_at: string | null
          raw_data: Json | null
          severity: Database["public"]["Enums"]["change_severity"]
          source_id: string
          source_url: string | null
          title: string
        }
        Insert: {
          change_type: string
          check_log_id?: string | null
          description?: string | null
          detected_at?: string
          id?: string
          is_processed?: boolean | null
          new_value?: string | null
          old_value?: string | null
          processed_at?: string | null
          raw_data?: Json | null
          severity?: Database["public"]["Enums"]["change_severity"]
          source_id: string
          source_url?: string | null
          title: string
        }
        Update: {
          change_type?: string
          check_log_id?: string | null
          description?: string | null
          detected_at?: string
          id?: string
          is_processed?: boolean | null
          new_value?: string | null
          old_value?: string | null
          processed_at?: string | null
          raw_data?: Json | null
          severity?: Database["public"]["Enums"]["change_severity"]
          source_id?: string
          source_url?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "detected_changes_check_log_id_fkey"
            columns: ["check_log_id"]
            isOneToOne: false
            referencedRelation: "source_check_logs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "detected_changes_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "content_sources"
            referencedColumns: ["id"]
          },
        ]
      }
      discussion_likes: {
        Row: {
          created_at: string | null
          discussion_id: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          discussion_id: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          discussion_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "discussion_likes_discussion_id_fkey"
            columns: ["discussion_id"]
            isOneToOne: false
            referencedRelation: "chapter_discussions"
            referencedColumns: ["id"]
          },
        ]
      }
      error_logs: {
        Row: {
          created_at: string
          error_message: string
          error_stack: string | null
          error_type: string
          id: string
          metadata: Json | null
          page_url: string | null
          resolved_at: string | null
          resolved_by: string | null
          session_id: string | null
          severity: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          error_message: string
          error_stack?: string | null
          error_type: string
          id?: string
          metadata?: Json | null
          page_url?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          session_id?: string | null
          severity?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          error_message?: string
          error_stack?: string | null
          error_type?: string
          id?: string
          metadata?: Json | null
          page_url?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          session_id?: string | null
          severity?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      governance_settings: {
        Row: {
          description: string | null
          id: string
          setting_key: string
          setting_value: Json
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          description?: string | null
          id?: string
          setting_key: string
          setting_value: Json
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          description?: string | null
          id?: string
          setting_key?: string
          setting_value?: Json
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      incident_timeline: {
        Row: {
          created_at: string
          created_by: string | null
          description: string
          event_type: string
          id: string
          incident_id: string | null
          new_status: string | null
          old_status: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description: string
          event_type: string
          id?: string
          incident_id?: string | null
          new_status?: string | null
          old_status?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string
          event_type?: string
          id?: string
          incident_id?: string | null
          new_status?: string | null
          old_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "incident_timeline_incident_id_fkey"
            columns: ["incident_id"]
            isOneToOne: false
            referencedRelation: "incidents"
            referencedColumns: ["id"]
          },
        ]
      }
      incidents: {
        Row: {
          acknowledged_at: string | null
          affected_services: string[] | null
          assigned_to: string | null
          created_at: string
          created_by: string | null
          description: string | null
          detected_at: string
          id: string
          impact: string | null
          incident_number: string
          resolution: string | null
          resolved_at: string | null
          root_cause: string | null
          severity: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          acknowledged_at?: string | null
          affected_services?: string[] | null
          assigned_to?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          detected_at?: string
          id?: string
          impact?: string | null
          incident_number: string
          resolution?: string | null
          resolved_at?: string | null
          root_cause?: string | null
          severity: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          acknowledged_at?: string | null
          affected_services?: string[] | null
          assigned_to?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          detected_at?: string
          id?: string
          impact?: string | null
          incident_number?: string
          resolution?: string | null
          resolved_at?: string | null
          root_cause?: string | null
          severity?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      learning_goals: {
        Row: {
          completed_at: string | null
          created_at: string
          current_value: number | null
          description: string | null
          goal_type: string
          id: string
          status: string | null
          target_date: string | null
          target_value: number
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          current_value?: number | null
          description?: string | null
          goal_type: string
          id?: string
          status?: string | null
          target_date?: string | null
          target_value: number
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          current_value?: number | null
          description?: string | null
          goal_type?: string
          id?: string
          status?: string | null
          target_date?: string | null
          target_value?: number
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      learning_kpi_cache: {
        Row: {
          computed_at: string
          created_at: string
          entity_id: string
          id: string
          kpi_type: string
          metrics: Json
          valid_until: string
        }
        Insert: {
          computed_at?: string
          created_at?: string
          entity_id: string
          id?: string
          kpi_type: string
          metrics?: Json
          valid_until?: string
        }
        Update: {
          computed_at?: string
          created_at?: string
          entity_id?: string
          id?: string
          kpi_type?: string
          metrics?: Json
          valid_until?: string
        }
        Relationships: []
      }
      media_progress: {
        Row: {
          completed: boolean | null
          completed_at: string | null
          created_at: string | null
          id: string
          last_position: number | null
          media_id: string | null
          progress_percent: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          last_position?: number | null
          media_id?: string | null
          progress_percent?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          last_position?: number | null
          media_id?: string | null
          progress_percent?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_progress_media_id_fkey"
            columns: ["media_id"]
            isOneToOne: false
            referencedRelation: "chapter_media"
            referencedColumns: ["id"]
          },
        ]
      }
      mentor_profiles: {
        Row: {
          availability_hours: number | null
          bio: string | null
          created_at: string | null
          expertise_areas: string[] | null
          id: string
          is_active: boolean | null
          max_mentees: number | null
          rating: number | null
          total_sessions: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          availability_hours?: number | null
          bio?: string | null
          created_at?: string | null
          expertise_areas?: string[] | null
          id?: string
          is_active?: boolean | null
          max_mentees?: number | null
          rating?: number | null
          total_sessions?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          availability_hours?: number | null
          bio?: string | null
          created_at?: string | null
          expertise_areas?: string[] | null
          id?: string
          is_active?: boolean | null
          max_mentees?: number | null
          rating?: number | null
          total_sessions?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      mentorships: {
        Row: {
          created_at: string | null
          ended_at: string | null
          id: string
          mentee_id: string
          mentor_id: string | null
          notes: string | null
          started_at: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          ended_at?: string | null
          id?: string
          mentee_id: string
          mentor_id?: string | null
          notes?: string | null
          started_at?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          ended_at?: string | null
          id?: string
          mentee_id?: string
          mentor_id?: string | null
          notes?: string | null
          started_at?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mentorships_mentor_id_fkey"
            columns: ["mentor_id"]
            isOneToOne: false
            referencedRelation: "mentor_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      ml_predictions: {
        Row: {
          confidence: number | null
          created_at: string | null
          id: string
          prediction_data: Json
          prediction_type: string
          user_id: string
          valid_until: string | null
        }
        Insert: {
          confidence?: number | null
          created_at?: string | null
          id?: string
          prediction_data: Json
          prediction_type: string
          user_id: string
          valid_until?: string | null
        }
        Update: {
          confidence?: number | null
          created_at?: string | null
          id?: string
          prediction_data?: Json
          prediction_type?: string
          user_id?: string
          valid_until?: string | null
        }
        Relationships: []
      }
      page_views: {
        Row: {
          chapter_id: string | null
          created_at: string
          duration_seconds: number | null
          id: string
          page_path: string
          session_id: string
          user_id: string | null
        }
        Insert: {
          chapter_id?: string | null
          created_at?: string
          duration_seconds?: number | null
          id?: string
          page_path: string
          session_id: string
          user_id?: string | null
        }
        Update: {
          chapter_id?: string | null
          created_at?: string
          duration_seconds?: number | null
          id?: string
          page_path?: string
          session_id?: string
          user_id?: string | null
        }
        Relationships: []
      }
      performance_metrics: {
        Row: {
          id: string
          metric_name: string
          metric_type: string
          recorded_at: string
          tags: Json | null
          unit: string
          value: number
        }
        Insert: {
          id?: string
          metric_name: string
          metric_type: string
          recorded_at?: string
          tags?: Json | null
          unit: string
          value: number
        }
        Update: {
          id?: string
          metric_name?: string
          metric_type?: string
          recorded_at?: string
          tags?: Json | null
          unit?: string
          value?: number
        }
        Relationships: []
      }
      premium_chapters: {
        Row: {
          chapter_id: string
          created_at: string
          id: string
          min_plan_type: string
        }
        Insert: {
          chapter_id: string
          created_at?: string
          id?: string
          min_plan_type: string
        }
        Update: {
          chapter_id?: string
          created_at?: string
          id?: string
          min_plan_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "premium_chapters_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: true
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "premium_chapters_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: true
            referencedRelation: "content_quality_summary"
            referencedColumns: ["chapter_id"]
          },
        ]
      }
      production_checklist: {
        Row: {
          category: string
          completed_at: string | null
          completed_by: string | null
          created_at: string
          description: string | null
          evidence_url: string | null
          id: string
          is_completed: boolean | null
          is_required: boolean | null
          item_name: string
          notes: string | null
          updated_at: string
        }
        Insert: {
          category: string
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string
          description?: string | null
          evidence_url?: string | null
          id?: string
          is_completed?: boolean | null
          is_required?: boolean | null
          item_name: string
          notes?: string | null
          updated_at?: string
        }
        Update: {
          category?: string
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string
          description?: string | null
          evidence_url?: string | null
          id?: string
          is_completed?: boolean | null
          is_required?: boolean | null
          item_name?: string
          notes?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          first_name: string | null
          id: string
          last_name: string | null
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email: string
          first_name?: string | null
          id: string
          last_name?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
        }
        Relationships: []
      }
      push_subscriptions: {
        Row: {
          auth_key: string
          created_at: string
          endpoint: string
          id: string
          is_active: boolean | null
          p256dh_key: string
          updated_at: string
          user_id: string
        }
        Insert: {
          auth_key: string
          created_at?: string
          endpoint: string
          id?: string
          is_active?: boolean | null
          p256dh_key: string
          updated_at?: string
          user_id: string
        }
        Update: {
          auth_key?: string
          created_at?: string
          endpoint?: string
          id?: string
          is_active?: boolean | null
          p256dh_key?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      question_analytics: {
        Row: {
          avg_time_seconds: number | null
          chapter_id: string
          correct_attempts: number
          created_at: string
          difficulty_score: number | null
          id: string
          incorrect_attempts: number
          language: string
          last_updated_at: string
          question_index: number
          question_text: string | null
          total_attempts: number
        }
        Insert: {
          avg_time_seconds?: number | null
          chapter_id: string
          correct_attempts?: number
          created_at?: string
          difficulty_score?: number | null
          id?: string
          incorrect_attempts?: number
          language?: string
          last_updated_at?: string
          question_index: number
          question_text?: string | null
          total_attempts?: number
        }
        Update: {
          avg_time_seconds?: number | null
          chapter_id?: string
          correct_attempts?: number
          created_at?: string
          difficulty_score?: number | null
          id?: string
          incorrect_attempts?: number
          language?: string
          last_updated_at?: string
          question_index?: number
          question_text?: string | null
          total_attempts?: number
        }
        Relationships: [
          {
            foreignKeyName: "question_analytics_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "question_analytics_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "content_quality_summary"
            referencedColumns: ["chapter_id"]
          },
        ]
      }
      quiz_attempts: {
        Row: {
          chapter_id: string
          created_at: string
          id: string
          language: string
          passed: boolean
          questions_answered: Json | null
          score: number
          total_questions: number
          user_id: string
        }
        Insert: {
          chapter_id: string
          created_at?: string
          id?: string
          language: string
          passed?: boolean
          questions_answered?: Json | null
          score: number
          total_questions?: number
          user_id: string
        }
        Update: {
          chapter_id?: string
          created_at?: string
          id?: string
          language?: string
          passed?: boolean
          questions_answered?: Json | null
          score?: number
          total_questions?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "quiz_attempts_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quiz_attempts_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "content_quality_summary"
            referencedColumns: ["chapter_id"]
          },
        ]
      }
      recovery_tests: {
        Row: {
          backup_id: string | null
          completed_at: string | null
          discrepancies_found: number | null
          id: string
          performed_by: string | null
          records_verified: number | null
          started_at: string
          status: string
          tables_tested: string[] | null
          test_results: Json | null
          test_type: string
        }
        Insert: {
          backup_id?: string | null
          completed_at?: string | null
          discrepancies_found?: number | null
          id?: string
          performed_by?: string | null
          records_verified?: number | null
          started_at?: string
          status?: string
          tables_tested?: string[] | null
          test_results?: Json | null
          test_type: string
        }
        Update: {
          backup_id?: string | null
          completed_at?: string | null
          discrepancies_found?: number | null
          id?: string
          performed_by?: string | null
          records_verified?: number | null
          started_at?: string
          status?: string
          tables_tested?: string[] | null
          test_results?: Json | null
          test_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "recovery_tests_backup_id_fkey"
            columns: ["backup_id"]
            isOneToOne: false
            referencedRelation: "backup_logs"
            referencedColumns: ["id"]
          },
        ]
      }
      regeneration_jobs: {
        Row: {
          auto_apply: boolean | null
          change_id: string | null
          chapters_completed: string[] | null
          chapters_failed: Json | null
          chapters_to_process: string[]
          completed_at: string | null
          created_at: string
          error_message: string | null
          id: string
          processed_chapters: number
          started_at: string | null
          status: string
          total_chapters: number
          updated_at: string
        }
        Insert: {
          auto_apply?: boolean | null
          change_id?: string | null
          chapters_completed?: string[] | null
          chapters_failed?: Json | null
          chapters_to_process: string[]
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          processed_chapters?: number
          started_at?: string | null
          status?: string
          total_chapters?: number
          updated_at?: string
        }
        Update: {
          auto_apply?: boolean | null
          change_id?: string | null
          chapters_completed?: string[] | null
          chapters_failed?: Json | null
          chapters_to_process?: string[]
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          processed_chapters?: number
          started_at?: string | null
          status?: string
          total_chapters?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "regeneration_jobs_change_id_fkey"
            columns: ["change_id"]
            isOneToOne: false
            referencedRelation: "detected_changes"
            referencedColumns: ["id"]
          },
        ]
      }
      simulation_attempts: {
        Row: {
          completed_at: string
          created_at: string
          decisions_made: Json | null
          id: string
          max_score: number
          score: number
          simulation_id: string
          time_spent_seconds: number | null
          user_id: string
        }
        Insert: {
          completed_at?: string
          created_at?: string
          decisions_made?: Json | null
          id?: string
          max_score?: number
          score?: number
          simulation_id: string
          time_spent_seconds?: number | null
          user_id: string
        }
        Update: {
          completed_at?: string
          created_at?: string
          decisions_made?: Json | null
          id?: string
          max_score?: number
          score?: number
          simulation_id?: string
          time_spent_seconds?: number | null
          user_id?: string
        }
        Relationships: []
      }
      skill_assessments: {
        Row: {
          assessment_type: string
          completed_at: string | null
          created_at: string | null
          id: string
          max_score: number | null
          recommendations: Json | null
          skill_scores: Json | null
          total_score: number | null
          user_id: string
        }
        Insert: {
          assessment_type: string
          completed_at?: string | null
          created_at?: string | null
          id?: string
          max_score?: number | null
          recommendations?: Json | null
          skill_scores?: Json | null
          total_score?: number | null
          user_id: string
        }
        Update: {
          assessment_type?: string
          completed_at?: string | null
          created_at?: string | null
          id?: string
          max_score?: number | null
          recommendations?: Json | null
          skill_scores?: Json | null
          total_score?: number | null
          user_id?: string
        }
        Relationships: []
      }
      sla_configuration: {
        Row: {
          created_at: string
          critical_threshold: number | null
          description: string | null
          id: string
          is_active: boolean | null
          measurement_period: string
          metric_name: string
          target_value: number
          unit: string
          updated_at: string
          warning_threshold: number | null
        }
        Insert: {
          created_at?: string
          critical_threshold?: number | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          measurement_period: string
          metric_name: string
          target_value: number
          unit: string
          updated_at?: string
          warning_threshold?: number | null
        }
        Update: {
          created_at?: string
          critical_threshold?: number | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          measurement_period?: string
          metric_name?: string
          target_value?: number
          unit?: string
          updated_at?: string
          warning_threshold?: number | null
        }
        Relationships: []
      }
      sla_metrics: {
        Row: {
          actual_value: number
          breach_count: number | null
          created_at: string
          details: Json | null
          id: string
          is_met: boolean
          metric_name: string
          period_end: string
          period_start: string
          target_value: number
        }
        Insert: {
          actual_value: number
          breach_count?: number | null
          created_at?: string
          details?: Json | null
          id?: string
          is_met: boolean
          metric_name: string
          period_end: string
          period_start: string
          target_value: number
        }
        Update: {
          actual_value?: number
          breach_count?: number | null
          created_at?: string
          details?: Json | null
          id?: string
          is_met?: boolean
          metric_name?: string
          period_end?: string
          period_start?: string
          target_value?: number
        }
        Relationships: []
      }
      social_shares: {
        Row: {
          content_id: string | null
          id: string
          platform: string
          share_type: string
          share_url: string | null
          shared_at: string | null
          user_id: string
        }
        Insert: {
          content_id?: string | null
          id?: string
          platform: string
          share_type: string
          share_url?: string | null
          shared_at?: string | null
          user_id: string
        }
        Update: {
          content_id?: string | null
          id?: string
          platform?: string
          share_type?: string
          share_url?: string | null
          shared_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      source_check_logs: {
        Row: {
          changes_detected: boolean | null
          checked_at: string
          content_hash: string | null
          error_message: string | null
          id: string
          raw_data: Json | null
          response_time_ms: number | null
          source_id: string
          status: string
        }
        Insert: {
          changes_detected?: boolean | null
          checked_at?: string
          content_hash?: string | null
          error_message?: string | null
          id?: string
          raw_data?: Json | null
          response_time_ms?: number | null
          source_id: string
          status: string
        }
        Update: {
          changes_detected?: boolean | null
          checked_at?: string
          content_hash?: string | null
          error_message?: string | null
          id?: string
          raw_data?: Json | null
          response_time_ms?: number | null
          source_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "source_check_logs_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "content_sources"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_history: {
        Row: {
          change_reason: string | null
          change_type: string
          changed_by: string | null
          company_id: string
          created_at: string
          effective_date: string
          id: string
          new_plan_id: string
          old_plan_id: string | null
        }
        Insert: {
          change_reason?: string | null
          change_type: string
          changed_by?: string | null
          company_id: string
          created_at?: string
          effective_date?: string
          id?: string
          new_plan_id: string
          old_plan_id?: string | null
        }
        Update: {
          change_reason?: string | null
          change_type?: string
          changed_by?: string | null
          company_id?: string
          created_at?: string
          effective_date?: string
          id?: string
          new_plan_id?: string
          old_plan_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscription_history_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_history_new_plan_id_fkey"
            columns: ["new_plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_history_old_plan_id_fkey"
            columns: ["old_plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_plans: {
        Row: {
          created_at: string | null
          has_ai_tutor: boolean | null
          has_analytics: boolean | null
          has_certificates: boolean | null
          has_custom_branding: boolean | null
          id: string
          is_active: boolean | null
          max_chapters: number | null
          max_users: number | null
          name: string
          plan_type: Database["public"]["Enums"]["plan_type"]
          price_monthly: number | null
          price_yearly: number | null
          stripe_price_monthly_id: string | null
          stripe_price_yearly_id: string | null
          trial_days: number | null
        }
        Insert: {
          created_at?: string | null
          has_ai_tutor?: boolean | null
          has_analytics?: boolean | null
          has_certificates?: boolean | null
          has_custom_branding?: boolean | null
          id?: string
          is_active?: boolean | null
          max_chapters?: number | null
          max_users?: number | null
          name: string
          plan_type: Database["public"]["Enums"]["plan_type"]
          price_monthly?: number | null
          price_yearly?: number | null
          stripe_price_monthly_id?: string | null
          stripe_price_yearly_id?: string | null
          trial_days?: number | null
        }
        Update: {
          created_at?: string | null
          has_ai_tutor?: boolean | null
          has_analytics?: boolean | null
          has_certificates?: boolean | null
          has_custom_branding?: boolean | null
          id?: string
          is_active?: boolean | null
          max_chapters?: number | null
          max_users?: number | null
          name?: string
          plan_type?: Database["public"]["Enums"]["plan_type"]
          price_monthly?: number | null
          price_yearly?: number | null
          stripe_price_monthly_id?: string | null
          stripe_price_yearly_id?: string | null
          trial_days?: number | null
        }
        Relationships: []
      }
      system_health_checks: {
        Row: {
          check_type: string
          checked_at: string
          created_at: string
          details: Json | null
          id: string
          response_time_ms: number | null
          status: string
        }
        Insert: {
          check_type: string
          checked_at?: string
          created_at?: string
          details?: Json | null
          id?: string
          response_time_ms?: number | null
          status?: string
        }
        Update: {
          check_type?: string
          checked_at?: string
          created_at?: string
          details?: Json | null
          id?: string
          response_time_ms?: number | null
          status?: string
        }
        Relationships: []
      }
      training_sessions: {
        Row: {
          chapter_id: string | null
          completed: boolean | null
          completed_at: string | null
          created_at: string | null
          description: string | null
          duration_minutes: number | null
          id: string
          recurrence: string | null
          reminder_sent: boolean | null
          scheduled_at: string
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          chapter_id?: string | null
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          recurrence?: string | null
          reminder_sent?: boolean | null
          scheduled_at: string
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          chapter_id?: string | null
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          recurrence?: string | null
          reminder_sent?: boolean | null
          scheduled_at?: string
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      training_time: {
        Row: {
          created_at: string
          day_number: number
          id: string
          is_running: boolean
          last_start_time: string | null
          total_seconds: number
          training_started_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          day_number: number
          id?: string
          is_running?: boolean
          last_start_time?: string | null
          total_seconds?: number
          training_started_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          day_number?: number
          id?: string
          is_running?: boolean
          last_start_time?: string | null
          total_seconds?: number
          training_started_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      update_audit_log: {
        Row: {
          action: string
          chapter_id: string | null
          content_level: Database["public"]["Enums"]["content_level"] | null
          created_at: string
          details: Json | null
          entity_id: string | null
          entity_type: string
          id: string
          ip_address: string | null
          new_version: number | null
          performed_by: string | null
          previous_version: number | null
          severity: string | null
          source_url: string | null
        }
        Insert: {
          action: string
          chapter_id?: string | null
          content_level?: Database["public"]["Enums"]["content_level"] | null
          created_at?: string
          details?: Json | null
          entity_id?: string | null
          entity_type: string
          id?: string
          ip_address?: string | null
          new_version?: number | null
          performed_by?: string | null
          previous_version?: number | null
          severity?: string | null
          source_url?: string | null
        }
        Update: {
          action?: string
          chapter_id?: string | null
          content_level?: Database["public"]["Enums"]["content_level"] | null
          created_at?: string
          details?: Json | null
          entity_id?: string | null
          entity_type?: string
          id?: string
          ip_address?: string | null
          new_version?: number | null
          performed_by?: string | null
          previous_version?: number | null
          severity?: string | null
          source_url?: string | null
        }
        Relationships: []
      }
      user_2fa: {
        Row: {
          backup_codes: Json | null
          created_at: string | null
          id: string
          is_enabled: boolean | null
          secret_encrypted: string | null
          updated_at: string | null
          user_id: string
          verified_at: string | null
        }
        Insert: {
          backup_codes?: Json | null
          created_at?: string | null
          id?: string
          is_enabled?: boolean | null
          secret_encrypted?: string | null
          updated_at?: string | null
          user_id: string
          verified_at?: string | null
        }
        Update: {
          backup_codes?: Json | null
          created_at?: string | null
          id?: string
          is_enabled?: boolean | null
          secret_encrypted?: string | null
          updated_at?: string | null
          user_id?: string
          verified_at?: string | null
        }
        Relationships: []
      }
      user_achievements: {
        Row: {
          achievement_id: string
          earned_at: string
          id: string
          metadata: Json | null
          user_id: string
        }
        Insert: {
          achievement_id: string
          earned_at?: string
          id?: string
          metadata?: Json | null
          user_id: string
        }
        Update: {
          achievement_id?: string
          earned_at?: string
          id?: string
          metadata?: Json | null
          user_id?: string
        }
        Relationships: []
      }
      user_gamification: {
        Row: {
          created_at: string
          id: string
          last_activity_date: string | null
          level: number
          perfect_simulations: number
          simulations_completed: number
          streak_days: number
          total_xp: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          last_activity_date?: string | null
          level?: number
          perfect_simulations?: number
          simulations_completed?: number
          streak_days?: number
          total_xp?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          last_activity_date?: string | null
          level?: number
          perfect_simulations?: number
          simulations_completed?: number
          streak_days?: number
          total_xp?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_learning_analytics: {
        Row: {
          attempts_before_pass: number | null
          chapter_id: string
          created_at: string
          first_attempt_at: string | null
          id: string
          learning_velocity: number | null
          passed_at: string | null
          score_progression: Json | null
          time_to_pass_seconds: number | null
          total_study_time_seconds: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          attempts_before_pass?: number | null
          chapter_id: string
          created_at?: string
          first_attempt_at?: string | null
          id?: string
          learning_velocity?: number | null
          passed_at?: string | null
          score_progression?: Json | null
          time_to_pass_seconds?: number | null
          total_study_time_seconds?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          attempts_before_pass?: number | null
          chapter_id?: string
          created_at?: string
          first_attempt_at?: string | null
          id?: string
          learning_velocity?: number | null
          passed_at?: string | null
          score_progression?: Json | null
          time_to_pass_seconds?: number | null
          total_study_time_seconds?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_learning_analytics_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_learning_analytics_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "content_quality_summary"
            referencedColumns: ["chapter_id"]
          },
        ]
      }
      user_notifications: {
        Row: {
          created_at: string
          icon: string | null
          id: string
          is_read: boolean
          link: string | null
          message: string
          read_at: string | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          icon?: string | null
          id?: string
          is_read?: boolean
          link?: string | null
          message: string
          read_at?: string | null
          title: string
          type?: string
          user_id: string
        }
        Update: {
          created_at?: string
          icon?: string | null
          id?: string
          is_read?: boolean
          link?: string | null
          message?: string
          read_at?: string | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      user_registration_requests: {
        Row: {
          company_id: string
          created_at: string | null
          email: string
          first_name: string | null
          id: string
          last_name: string | null
          rejection_reason: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          status: Database["public"]["Enums"]["user_company_status"] | null
          user_id: string | null
        }
        Insert: {
          company_id: string
          created_at?: string | null
          email: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          rejection_reason?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: Database["public"]["Enums"]["user_company_status"] | null
          user_id?: string | null
        }
        Update: {
          company_id?: string
          created_at?: string | null
          email?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          rejection_reason?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: Database["public"]["Enums"]["user_company_status"] | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_registration_requests_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_sessions: {
        Row: {
          browser: string | null
          city: string | null
          country: string | null
          device_type: string | null
          id: string
          last_activity_at: string
          latitude: number | null
          longitude: number | null
          pages_visited: number | null
          session_id: string
          started_at: string
          total_duration_seconds: number | null
          user_id: string | null
        }
        Insert: {
          browser?: string | null
          city?: string | null
          country?: string | null
          device_type?: string | null
          id?: string
          last_activity_at?: string
          latitude?: number | null
          longitude?: number | null
          pages_visited?: number | null
          session_id: string
          started_at?: string
          total_duration_seconds?: number | null
          user_id?: string | null
        }
        Update: {
          browser?: string | null
          city?: string | null
          country?: string | null
          device_type?: string | null
          id?: string
          last_activity_at?: string
          latitude?: number | null
          longitude?: number | null
          pages_visited?: number | null
          session_id?: string
          started_at?: string
          total_duration_seconds?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      video_lessons: {
        Row: {
          chapter_id: string
          created_at: string | null
          description: string | null
          duration_minutes: number | null
          id: string
          is_premium: boolean | null
          order_index: number | null
          title: string
          updated_at: string | null
          video_type: string | null
          video_url: string
        }
        Insert: {
          chapter_id: string
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_premium?: boolean | null
          order_index?: number | null
          title: string
          updated_at?: string | null
          video_type?: string | null
          video_url: string
        }
        Update: {
          chapter_id?: string
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_premium?: boolean | null
          order_index?: number | null
          title?: string
          updated_at?: string | null
          video_type?: string | null
          video_url?: string
        }
        Relationships: []
      }
      video_progress: {
        Row: {
          completed: boolean | null
          created_at: string | null
          id: string
          last_watched_at: string | null
          user_id: string
          video_id: string | null
          watched_seconds: number | null
        }
        Insert: {
          completed?: boolean | null
          created_at?: string | null
          id?: string
          last_watched_at?: string | null
          user_id: string
          video_id?: string | null
          watched_seconds?: number | null
        }
        Update: {
          completed?: boolean | null
          created_at?: string | null
          id?: string
          last_watched_at?: string | null
          user_id?: string
          video_id?: string | null
          watched_seconds?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "video_progress_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "video_lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      webinar_registrations: {
        Row: {
          attended: boolean | null
          id: string
          registered_at: string | null
          user_id: string
          webinar_id: string | null
        }
        Insert: {
          attended?: boolean | null
          id?: string
          registered_at?: string | null
          user_id: string
          webinar_id?: string | null
        }
        Update: {
          attended?: boolean | null
          id?: string
          registered_at?: string | null
          user_id?: string
          webinar_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "webinar_registrations_webinar_id_fkey"
            columns: ["webinar_id"]
            isOneToOne: false
            referencedRelation: "webinars"
            referencedColumns: ["id"]
          },
        ]
      }
      webinars: {
        Row: {
          created_at: string | null
          description: string | null
          duration_minutes: number | null
          host_id: string
          id: string
          is_recorded: boolean | null
          max_participants: number | null
          meeting_url: string | null
          recording_url: string | null
          scheduled_at: string
          status: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          host_id: string
          id?: string
          is_recorded?: boolean | null
          max_participants?: number | null
          meeting_url?: string | null
          recording_url?: string | null
          scheduled_at: string
          status?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          host_id?: string
          id?: string
          is_recorded?: boolean | null
          max_participants?: number | null
          meeting_url?: string | null
          recording_url?: string | null
          scheduled_at?: string
          status?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      weekly_challenges: {
        Row: {
          badge_reward: string | null
          challenge_type: string
          created_at: string | null
          description: string | null
          end_date: string
          id: string
          is_active: boolean | null
          start_date: string
          target_value: number
          title: string
          xp_reward: number | null
        }
        Insert: {
          badge_reward?: string | null
          challenge_type: string
          created_at?: string | null
          description?: string | null
          end_date: string
          id?: string
          is_active?: boolean | null
          start_date: string
          target_value: number
          title: string
          xp_reward?: number | null
        }
        Update: {
          badge_reward?: string | null
          challenge_type?: string
          created_at?: string | null
          description?: string | null
          end_date?: string
          id?: string
          is_active?: boolean | null
          start_date?: string
          target_value?: number
          title?: string
          xp_reward?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      content_quality_summary: {
        Row: {
          avg_score: number | null
          chapter_id: string | null
          content_level: Database["public"]["Enums"]["content_level"] | null
          de_score: number | null
          en_score: number | null
          last_analyzed: string | null
          latest_status: string | null
          module: string | null
          order_index: number | null
          ro_score: number | null
          slug: string | null
        }
        Insert: {
          avg_score?: never
          chapter_id?: string | null
          content_level?: Database["public"]["Enums"]["content_level"] | null
          de_score?: never
          en_score?: never
          last_analyzed?: never
          latest_status?: never
          module?: string | null
          order_index?: number | null
          ro_score?: never
          slug?: string | null
        }
        Update: {
          avg_score?: never
          chapter_id?: string | null
          content_level?: Database["public"]["Enums"]["content_level"] | null
          de_score?: never
          en_score?: never
          last_analyzed?: never
          latest_status?: never
          module?: string | null
          order_index?: number | null
          ro_score?: never
          slug?: string | null
        }
        Relationships: []
      }
      team_competency_matrix: {
        Row: {
          avg_score: number | null
          company_id: string | null
          competencies: Json | null
          email: string | null
          first_name: string | null
          last_name: string | null
          last_updated: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_users_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      generate_certificate_code: { Args: never; Returns: string }
      get_user_company_id: { Args: { _user_id: string }; Returns: string }
      get_user_company_role: {
        Args: { _company_id: string; _user_id: string }
        Returns: Database["public"]["Enums"]["company_role"]
      }
      get_user_role: {
        Args: { _user_id: string }
        Returns: Database["public"]["Enums"]["app_role"]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_company_admin: {
        Args: { _company_id: string; _user_id: string }
        Returns: boolean
      }
      is_super_admin: { Args: { _user_id: string }; Returns: boolean }
      user_belongs_to_company: {
        Args: { _company_id: string; _user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
      change_severity: "minor" | "major" | "critical"
      company_role: "super_admin" | "company_admin" | "user"
      content_level: "informational" | "operational" | "critical"
      plan_type: "free" | "starter" | "professional" | "enterprise"
      source_type: "api" | "rss" | "website" | "official" | "database"
      update_status:
        | "pending"
        | "approved"
        | "rejected"
        | "applied"
        | "failed"
        | "rolled_back"
      user_company_status: "pending" | "approved" | "rejected" | "suspended"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
      change_severity: ["minor", "major", "critical"],
      company_role: ["super_admin", "company_admin", "user"],
      content_level: ["informational", "operational", "critical"],
      plan_type: ["free", "starter", "professional", "enterprise"],
      source_type: ["api", "rss", "website", "official", "database"],
      update_status: [
        "pending",
        "approved",
        "rejected",
        "applied",
        "failed",
        "rolled_back",
      ],
      user_company_status: ["pending", "approved", "rejected", "suspended"],
    },
  },
} as const
