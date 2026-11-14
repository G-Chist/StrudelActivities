// @title Sixbsebya
// @by G-Chist

const sixbsebya = n("0 0 5 0 0 7").scale("F1:phrygian").s("<sine gm_kalimba>").release(1)
  .slow(6)
  .penv(24).pdecay(0.05)
  .attack(0.05)
  .room(2)
  .crush(8)
  .distort(2)
  .phaser(10)
  .distorttype("chebyshev")
  .crush(8)
  .lpf(sine.range(200,2000))


$: sixbsebya._scope()
