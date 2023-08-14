import { Bindings } from '@comunica/bindings-factory-context';
import { SetUnionContext } from '@comunica/actor-merge-binding-factory-context-union';
import { ActionContext} from '@comunica/core';
import { DataFactory } from 'rdf-data-factory';
import { Map } from 'immutable';
import type * as RDF from '@rdfjs/types';
import * as mathjs from 'mathjs'


function opsPerSecondNonOverlappingOverlappingContext(nRuns: number){
    const DF = new DataFactory();
    let bindings: Bindings;
    let bindingsOther: Bindings;

    bindings = new Bindings(DF, Map<string, RDF.Term>([
        [ 'a', DF.namedNode('ex:a') ],
        [ 'b', DF.namedNode('ex:b') ],
        [ 'c', DF.namedNode('ex:c') ],
        [ 'd', DF.namedNode('ex:d') ],
        [ 'e', DF.namedNode('ex:e') ]
    ]),
    { source: new SetUnionContext() },
     new ActionContext({ source: [ 'ex:S1', 'ex:S2', 'ex:S3' ]})
    );

    bindingsOther = new Bindings(DF, Map<string, RDF.Term>([
        [ 'f', DF.namedNode('ex:f') ],
        [ 'g', DF.namedNode('ex:g') ],
        [ 'h', DF.namedNode('ex:h') ],
        [ 'i', DF.namedNode('ex:i') ],
    ]),
    { source: new SetUnionContext() },
    new ActionContext({ source: [ 'ex:S1', 'ex:S2', 'ex:S5', 'ex:S6' ]})
    );

    const start = process.hrtime();
    for (let i = 0; i<nRuns; i++){
        const result = bindings.merge(bindingsOther);
    }

    const end = process.hrtime(start);
    const endSeconds = (end[0]+ end[1] / Math.pow(10,9));
    // console.log(`Ops/second merge non overlapping, ovelapping context: ${nRuns/endSeconds}`);
    // console.log(`Total time overlapping: ${endSeconds}`);
    return endSeconds
}

function opsPerSecondNonOverlappingEmptyContext(nRuns: number){
    const DF = new DataFactory();
    let bindings: Bindings;
    let bindingsOther: Bindings;

    bindings = new Bindings(DF, Map<string, RDF.Term>([
        [ 'a', DF.namedNode('ex:a') ],
        [ 'b', DF.namedNode('ex:b') ],
        [ 'c', DF.namedNode('ex:c') ],
        [ 'd', DF.namedNode('ex:d') ],
        [ 'e', DF.namedNode('ex:e') ]
    ]),
    { source: new SetUnionContext() },
     new ActionContext({})
    );

    bindingsOther = new Bindings(DF, Map<string, RDF.Term>([
        [ 'f', DF.namedNode('ex:f') ],
        [ 'g', DF.namedNode('ex:g') ],
        [ 'h', DF.namedNode('ex:h') ],
        [ 'i', DF.namedNode('ex:i') ],
    ]),
    {},
    new ActionContext({})
    );

    const start = process.hrtime();
    for (let i = 0; i<nRuns; i++){
        const result = bindings.merge(bindingsOther);
    }

    const end = process.hrtime(start);
    const endSeconds = (end[0]+ end[1] / Math.pow(10,9));
    // console.log(`Ops/second merge non overlapping, no context: ${nRuns/endSeconds}`);
    // console.log(`Total time overlapping: ${endSeconds}`);
    return endSeconds
}

function opsPerSecondOverlappingOverlappingContext(nRuns: number){
    const DF = new DataFactory();
    let bindings: Bindings;
    let bindingsOther: Bindings;

    bindings = new Bindings(DF, Map<string, RDF.Term>([
        [ 'a', DF.namedNode('ex:a') ],
        [ 'b', DF.namedNode('ex:b') ],
        [ 'c', DF.namedNode('ex:c') ],
        [ 'd', DF.namedNode('ex:d') ],
        [ 'e', DF.namedNode('ex:e') ]
    ]),
    { source: new SetUnionContext() },
     new ActionContext({ source: [ 'ex:S1', 'ex:S2', 'ex:S3' ]})
    );

    bindingsOther = new Bindings(DF, Map<string, RDF.Term>([
        [ 'd', DF.namedNode('ex:d') ],
        [ 'a', DF.namedNode('ex:a') ],
        [ 'b', DF.namedNode('ex:b') ],
        [ 'f', DF.namedNode('ex:f') ],
    ]),
    { source: new SetUnionContext() },
    new ActionContext({ source: [ 'ex:S1', 'ex:S2', 'ex:S5', 'ex:S6' ]})
    );

    const start = process.hrtime();
    for (let i = 0; i<nRuns; i++){
        const result = bindings.merge(bindingsOther);
    }

    const end = process.hrtime(start);
    const endSeconds = (end[0]+ end[1] / Math.pow(10,9));
    // console.log(`Ops/second merge overlapping, ovelapping context: ${nRuns/endSeconds}`);
    // console.log(`Total time overlapping: ${endSeconds}`);
    return endSeconds
}

function opsPerSecondOverlappingNoContext(nRuns: number){
    const DF = new DataFactory();
    let bindings: Bindings;
    let bindingsOther: Bindings;

    bindings = new Bindings(DF, Map<string, RDF.Term>([
        [ 'a', DF.namedNode('ex:a') ],
        [ 'b', DF.namedNode('ex:b') ],
        [ 'c', DF.namedNode('ex:c') ],
        [ 'd', DF.namedNode('ex:d') ],
        [ 'e', DF.namedNode('ex:e') ]
    ]),
    { },
    new ActionContext({})
    );

    bindingsOther = new Bindings(DF, Map<string, RDF.Term>([
        [ 'd', DF.namedNode('ex:d') ],
        [ 'a', DF.namedNode('ex:a') ],
        [ 'b', DF.namedNode('ex:b') ],
        [ 'f', DF.namedNode('ex:f') ],
    ]),
    { },
    new ActionContext({})
    );

    const start = process.hrtime();
    for (let i = 0; i<nRuns; i++){
        const result = bindings.merge(bindingsOther);
    }

    const end = process.hrtime(start);
    const endSeconds = (end[0]+ end[1] / Math.pow(10,9));
    // console.log(`Ops/second merge overlapping no context: ${nRuns/endSeconds}`);
    // console.log(`Total time overlapping: ${endSeconds}`);
    return endSeconds;
}

function runExperiments(nReplications: number, nMerges: number){
    const mean_1 = [];
    const mean_2 = [];
    const mean_3 = [];
    const mean_4 = [];
    for (let i = 0; i<nReplications; i++){
        console.log(`Replication ${i+1}/${nReplications}`);
        mean_1.push(nMerges/opsPerSecondNonOverlappingOverlappingContext(nMerges));
        mean_2.push(nMerges/opsPerSecondOverlappingOverlappingContext(nMerges));
        mean_3.push(nMerges/opsPerSecondNonOverlappingEmptyContext(nMerges));
        mean_4.push(nMerges/opsPerSecondOverlappingNoContext(nMerges));
    }
    const std_1 = (mathjs.std(mean_1) as unknown) as number
    const std_2 = (mathjs.std(mean_2) as unknown) as number
    const std_3 = (mathjs.std(mean_3) as unknown) as number
    const std_4 = (mathjs.std(mean_4) as unknown) as number


    console.log(`Non overlapping bindings, overlapping context entries: ${mathjs.mean(mean_1)} ops/s ${std_1} `);
    console.log(`Overlapping bindings, overlapping context entries: ${mathjs.mean(mean_2)} ops/s ${std_2} `);
    console.log(`Non overlapping bindings, no context: ${mathjs.mean(mean_3)} ops/s ${std_3} `);
    console.log(`Overlapping bindings, no context: ${mathjs.mean(mean_4)} ops/s ${std_4} `);

}
runExperiments(20, 1000000);
// opsPerSecondNonOverlappingOverlappingContext(10000000)
// opsPerSecondOverlappingOverlappingContext(10000000)
// opsPerSecondNonOverlappingEmptyContext(10000000);
// opsPerSecondOverlappingNoContext(10000000);

