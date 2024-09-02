export class GeolocationGetPositionResult {
  static readonly codes = Object.freeze({
    OK: 0,
    PERMISSION_DENIED: 1,
    POSITION_UNAVAILABLE: 2,
    TIMEOUT: 3,
    MISSING_FEATURE: 4
  })

  public readonly success: boolean;
  public readonly codes = GeolocationGetPositionResult.codes;

  constructor(
    public readonly code: number,
    public readonly latlon: [number, number]
  ) {
    this.success = this.code === this.codes.OK;
  }
}
