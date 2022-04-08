import { LocationIconPipe } from './location-icon.pipe';

const WORLDWIDE_ICON_URL = 'assets/icons/worldwide-symbol.png';
const REMOTE_ICON_URL = 'assets/icons/remote-symbol.png';

describe('LocationIconPipe', () => {
  let pipe: LocationIconPipe;

  beforeEach(() => {
    pipe = new LocationIconPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return worldwide icon url', () => {
    expect(pipe.transform('Worldwide')).toBe(WORLDWIDE_ICON_URL);
    expect(pipe.transform('Anywhere')).toBe(WORLDWIDE_ICON_URL);
  });

  it('should return remote icon url', () => {
    expect(pipe.transform('USA Only')).toBe(REMOTE_ICON_URL);
    expect(pipe.transform('Europa Only')).toBe(REMOTE_ICON_URL);
  });
});
