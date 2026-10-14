const atlasStops = [0, 33.333, 66.667, 100] as const

export function photoPosition(cell: number) {
  return atlasStops[cell % 4] + "% " + atlasStops[Math.floor(cell / 4)] + "%"
}
