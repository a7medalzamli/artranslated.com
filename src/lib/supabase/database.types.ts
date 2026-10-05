/**
 * Database types matching supabase/migrations. Kept in sync with the schema by
 * hand for now; can be regenerated later with the Supabase CLI
 * (`supabase gen types typescript`).
 */
export type PostStatus = "draft" | "published";
export type QuoteStatus = "new" | "replied" | "closed";

export type Database = {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string | null;
          content: string;
          category: string | null;
          cover_image_url: string | null;
          status: PostStatus;
          published_at: string | null;
          seo_title: string | null;
          seo_description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          excerpt?: string | null;
          content?: string;
          category?: string | null;
          cover_image_url?: string | null;
          status?: PostStatus;
          published_at?: string | null;
          seo_title?: string | null;
          seo_description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          excerpt?: string | null;
          content?: string;
          category?: string | null;
          cover_image_url?: string | null;
          status?: PostStatus;
          published_at?: string | null;
          seo_title?: string | null;
          seo_description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      quote_requests: {
        Row: {
          id: string;
          name: string;
          email: string;
          language_pair: string;
          specialization: string | null;
          volume: string | null;
          deadline: string | null;
          message: string | null;
          nda_requested: boolean;
          status: QuoteStatus;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          language_pair: string;
          specialization?: string | null;
          volume?: string | null;
          deadline?: string | null;
          message?: string | null;
          nda_requested?: boolean;
          status?: QuoteStatus;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          language_pair?: string;
          specialization?: string | null;
          volume?: string | null;
          deadline?: string | null;
          message?: string | null;
          nda_requested?: boolean;
          status?: QuoteStatus;
          created_at?: string;
        };
        Relationships: [];
      };
      site_content: {
        Row: {
          key: string;
          data: Record<string, unknown>;
          updated_at: string;
        };
        Insert: {
          key: string;
          data: Record<string, unknown>;
          updated_at?: string;
        };
        Update: {
          key?: string;
          data?: Record<string, unknown>;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<never, never>;
    Functions: Record<never, never>;
    Enums: Record<never, never>;
    CompositeTypes: Record<never, never>;
  };
};
