// @title BreakcoreStarter
// @by G-Chist

samples('github:yaxu/clean-breaks')

const amenbrotha = s("amen/4").fast(1.5)
.fit()
.chop(16)
.cut(1)
.clip(slider(1.2368,0.2,1.4))
.distort(sine.range(1.1,1.2))
.room(slider(1.22,0,2))
.ply("<1 2 4 2 1 2>")
.distorttype("sinefold")
.postgain(1.2)
.djf(slider(0.5966,0.2,0.8))


$: amenbrotha._spectrum()
