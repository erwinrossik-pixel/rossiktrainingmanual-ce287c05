// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { classifyAiGatewayError } from '../../../supabase/functions/_shared/aiGatewayError';

describe('classifyAiGatewayError', () => {
  it('workspace credit limit (403) is a blocking credit_limit_reached failure, keeping status 403', () => {
    const f = classifyAiGatewayError(403, JSON.stringify({ type: 'credit_limit_reached', message: 'Workspace credit limit reached' }));
    expect(f).toEqual({ status: 403, code: 'credit_limit_reached', message: 'Workspace credit limit reached', blocking: true });
  });

  it('exhausted credits (402) stop the batch', () => {
    expect(classifyAiGatewayError(402, 'not json')?.blocking).toBe(true);
  });

  it('rate limit (429) does not stop the batch', () => {
    expect(classifyAiGatewayError(429, '')).toMatchObject({ code: 'rate_limited', blocking: false });
  });

  it('other statuses are left to the caller', () => {
    expect(classifyAiGatewayError(500, '')).toBeNull();
  });
});
