// Maps Lovable AI Gateway failures to a stable code + safe message so callers can
// show a clear explanation instead of a generic 500.
export type AiErrorCode =
  | 'credit_limit_reached'
  | 'credits_exhausted'
  | 'ai_access_denied'
  | 'rate_limited';

export interface AiGatewayFailure {
  status: number;
  code: AiErrorCode;
  message: string;
  /** true = no further AI calls can succeed until an owner/admin acts; stop the batch. */
  blocking: boolean;
}

/** Returns a structured failure for 402/403/429, or null for other statuses (left to the caller). */
export function classifyAiGatewayError(status: number, bodyText: string): AiGatewayFailure | null {
  let type: string | undefined;
  let upstreamMessage: string | undefined;
  try {
    const body = JSON.parse(bodyText);
    type = typeof body?.type === 'string' ? body.type : undefined;
    upstreamMessage = typeof body?.message === 'string' ? body.message : undefined;
  } catch {
    // non-JSON body: fall back to defaults below
  }

  if (status === 402) {
    return { status, code: 'credits_exhausted', message: upstreamMessage || 'AI credits are exhausted.', blocking: true };
  }
  if (status === 403) {
    const isLimit = type === 'credit_limit_reached';
    return {
      status,
      code: isLimit ? 'credit_limit_reached' : 'ai_access_denied',
      message: upstreamMessage || (isLimit ? 'Workspace AI credit limit reached.' : 'AI access denied.'),
      blocking: true,
    };
  }
  if (status === 429) {
    return { status, code: 'rate_limited', message: 'Rate limit exceeded. Please try again later.', blocking: false };
  }
  return null;
}

export function aiFailureResponse(
  failure: AiGatewayFailure,
  corsHeaders: Record<string, string>,
  extra: Record<string, unknown> = {},
): Response {
  return new Response(
    JSON.stringify({ success: false, error: failure.message, code: failure.code, ...extra }),
    { status: failure.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
  );
}
