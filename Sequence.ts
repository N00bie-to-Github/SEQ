class Sequence {
    sequence: number[];
    variable: string;
    maxIter: number;
    tolerance: number;
    sigFigs: number;
    constructor(sequence: number[], variable = 'x') {
        const options = {
            ...{
                maxIer: 1000,
                tolerance: 1e-4,
                sigFigs: 16,
            },
        };
        //set the sequence
        this.sequence = sequence;

        //the maximum iterations before giving up
        this.maxIter = options.maxIer;

        //the variable that will be used when creating the polynomial string
        this.variable = variable;

        //set the maximum allowable tolerance
        this.tolerance = options.tolerance;

        //set the significant figures
        this.sigFigs = options.sigFigs;
    }
}

