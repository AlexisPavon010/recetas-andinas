const compose = (...rest: any[]) => (x: any) => rest.reduceRight((y, f) => f(y), x);

export default compose;
