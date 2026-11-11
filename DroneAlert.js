// @title DroneAlert
// @by G-Chist

samples('github:yaxu/clean-breaks')

const melody_content_1 = "12 12 12 12@3 12 12 12 12@3"
const melody_content_2 = "8 5 0 3 0 5 7 8"
const melody_content_3 = "0 1 2 3 4 3 2 1 2 3 4 5 6 7 6 5 6 7 6 5 4 3 2 1"

const melody = n(melody_content_2)
  .slow(16)
  .scale("<C3:phrygian>")
  .s("<gm_acoustic_guitar_nylon saw>").add(note("0,.1"))
  .speed(perlin.range(-1,1))
  .delay(0.5)
  .lpf(200)
  .clip(1.2)
  .tremolo(perlin.range(1000, 2000).segment(5).round())
  .hpf(1900)
  .attack(slider(0.2,0,0.2))
  .sustain(0.3)
  .decay(0.2)
  .room(1.5)
  .phaser(0.2).distort(10).hpf(1000).lpf(900)
  .lpf(slider(696,200,1000)).hpf(1900)
.postgain(0.35)

const melody2 = n(melody_content_2)
  .slow(1)
  .scale("<C3:phrygian>")
  .s("<gm_acoustic_guitar_nylon saw>")
  .speed(perlin.range(-1,1))
  .delay(0.5)
  .lpf(200)
  .clip(1.2)
  .tremolo(perlin.range(400, 2000).segment(5).round())
  .hpf(1900)
  .attack(slider(0.2,0,0.2))
  .sustain(0.0)
  .decay(0.2)
  .room(1.5)
  .phaser(0.2).distort(9).hpf(1000).lpf(900)
  .lpf(slider(806.4,200,1000)).hpf(1900)
.postgain(slider(0.239,0,1))

$: melody2
$: melody._spectrum()
