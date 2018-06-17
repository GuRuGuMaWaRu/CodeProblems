function mirrorBits(a) {
    r=0;
    while(a){
        r=r<<1
        r+=a%2
        a=a>>1
    }
    return r
}
