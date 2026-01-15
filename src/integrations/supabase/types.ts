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
        ]
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
          device_type: string | null
          id: string
          last_activity_at: string
          pages_visited: number | null
          session_id: string
          started_at: string
          total_duration_seconds: number | null
          user_id: string | null
        }
        Insert: {
          browser?: string | null
          device_type?: string | null
          id?: string
          last_activity_at?: string
          pages_visited?: number | null
          session_id: string
          started_at?: string
          total_duration_seconds?: number | null
          user_id?: string | null
        }
        Update: {
          browser?: string | null
          device_type?: string | null
          id?: string
          last_activity_at?: string
          pages_visited?: number | null
          session_id?: string
          started_at?: string
          total_duration_seconds?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
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
    }
    Enums: {
      app_role: "admin" | "user"
      change_severity: "minor" | "major" | "critical"
      content_level: "informational" | "operational" | "critical"
      source_type: "api" | "rss" | "website" | "official" | "database"
      update_status:
        | "pending"
        | "approved"
        | "rejected"
        | "applied"
        | "failed"
        | "rolled_back"
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
      content_level: ["informational", "operational", "critical"],
      source_type: ["api", "rss", "website", "official", "database"],
      update_status: [
        "pending",
        "approved",
        "rejected",
        "applied",
        "failed",
        "rolled_back",
      ],
    },
  },
} as const
