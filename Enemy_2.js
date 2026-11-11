// @title Enemy_2
// @by G-Chist

const melody_content_1 = "12 12 12 12@3 12 12 12 12@3"
const melody_content_2 = "8 5 0 3 0 5 7 8"

const melody = n(melody_content_2)
  .slow(1)
  .scale("<C3:minor@3 D3:minor@3 A3:minor@6>")
  .s("<[gm_lead_1_square, gm_pad_bowed, metal] [gm_acoustic_guitar_nylon, gm_pad_bowed] [gm_muted_trumpet]>")
  .lpf(200)
  .clip(1.8) .layer(x=>x.fast(2))
  .release(0.1)
  .room(0.2)
  .gain(0.8)
  .mul(gain(sine.range(0.95, 1)))
  //.degradeBy(0.32)
  .clip(perlin.range(1.3,1.3))
  .attack(perlin.range(0.1, 0.3))
  .release(0.1)
  .room(0.83)
  .delay(0.9)
  .sustain(0.5)
  .release(0.1)
  //.pan(sine.slow(4).range(-1, 1).mul(pure(0.3)).add(0.5))
  .mul(gain(1.6)).crush(9)
.slow(4)
.chorus(3.7)
.room(4)
.lpf(perlin.range(700,1000))
.layer(x=>x.fast(2)).layer(x=>x.crush(perlin.range(8,10)).gain(.9).lpf(400))
.lpf(300).hpf(1000)

$: melody._spectrum()
