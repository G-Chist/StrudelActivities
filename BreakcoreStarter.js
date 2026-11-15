// @title BreakcoreStarter
// @by G-Chist

samples('github:yaxu/clean-breaks')

const amenbrotha = s("amen/4")
.fast(1.5).duck(2)
.fit()
.chop(16)
.cut(1)
.clip(slider(0.5924,0.2,1.4))
.attack(0.01)
.decay(1.9)
.sustain(0.5)
.release(0.0)
.distort(sine.range(1.1,1.2))
.room(slider(0,0,2))
.ply("<1 2 4 4 2 1>")
.distorttype("sinefold")
.postgain(1.2)
.djf(slider(0.5012,0.2,0.8))

$: amenbrotha._spectrum()
