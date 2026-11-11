// @title BreakcoreStarter
// @by G-Chist

samples('github:yaxu/clean-breaks')

const amenbrotha = s("amen/4")
.fast(1.5)
.fit()
.chop(16)
.cut(1)
.distort(choose(2,3,1))
.ply(choose(2,4,0.25,0.5,8,0.125,1))
.postgain(0.7)

$: amenbrotha
