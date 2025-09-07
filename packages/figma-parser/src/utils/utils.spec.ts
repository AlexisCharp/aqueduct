import { describe, expect, it, vi } from 'vitest';
import { delay } from './utils';

describe('delay', () => {
  it('should delay execution for the specified time', async () => {
    const ms = 10000;
    vi.useFakeTimers();
    let done = false;
    const delayPromise = delay(ms).then(() => {
      done = true;
    });
    expect(done).toBe(false);
    vi.advanceTimersByTime(ms);
    await delayPromise;
    expect(done).toBe(true);
    vi.useRealTimers();
  });
});
