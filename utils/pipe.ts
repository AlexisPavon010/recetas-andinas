const pipe = (...rest: any[]) => (x: any) => rest.reduce((y, f) => f(y), x);

export default pipe;
