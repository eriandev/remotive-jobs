import { RelativeDatePipe } from './relative-date.pipe';

describe('RelativeDatePipe', () => {
  it('should create an instance', () => {
    const pipe = new RelativeDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should lalala', () => {
    const pipe = new RelativeDatePipe();
    const date = new Date();
    const ISOString = date.toISOString();
    expect(pipe.transform(ISOString)).toBe('0 seconds ago');
  });
});
