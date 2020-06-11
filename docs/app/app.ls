require! 'prelude-ls': {abs}

sleep = (ms, f) -> set-timeout f, ms 

round2 = (val) -> parseInt(val * 100 + 0.5) / 100

new Ractive do 
  template: '#template'
  target: 'body'
  data:
    innerRadius: 1.64 # r
    Mt: 2             # Material Thickness
    kFactor: 0.38     # K-Factor 
    bendAngle: 90     # angle
    round2: round2
    getKFactor: (flangeDiff) -> 
      ossb = @get('ossb')
      ba = 2 * (ossb - flangeDiff)
      arc = @get('bendAngle') / 360.0
      r = @get('innerRadius')
      Mt = @get('Mt')
      kFactor = (ba / (2.0 * Math.PI * arc) - r) / Mt 
      return round2(kFactor) 
  computed: 
    bendAllowance: ->
      arc = @get('bendAngle') / 360.0
      r = @get('innerRadius')
      Mt = @get('Mt')
      kFactor = @get('kFactor')
      ba = 2.0 * Math.PI * (r + Mt * kFactor) * arc
      round2(ba)
    ossb: -> 
      # outside set back 
      r = @get('innerRadius')
      Mt = @get('Mt')
      round2(r + Mt)
    flangeDiff: -> 
      round2 @get('ossb') - @get('bendAllowance') / 2
