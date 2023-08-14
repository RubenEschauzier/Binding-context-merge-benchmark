"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bindings_factory_context_1 = require("@comunica/bindings-factory-context");
const actor_merge_binding_factory_context_union_1 = require("@comunica/actor-merge-binding-factory-context-union");
const core_1 = require("@comunica/core");
const rdf_data_factory_1 = require("rdf-data-factory");
const immutable_1 = require("immutable");
const mathjs = require("mathjs");
function opsPerSecondNonOverlappingOverlappingContext(nRuns) {
    const DF = new rdf_data_factory_1.DataFactory();
    let bindings;
    let bindingsOther;
    bindings = new bindings_factory_context_1.Bindings(DF, (0, immutable_1.Map)([
        ['a', DF.namedNode('ex:a')],
        ['b', DF.namedNode('ex:b')],
        ['c', DF.namedNode('ex:c')],
        ['d', DF.namedNode('ex:d')],
        ['e', DF.namedNode('ex:e')]
    ]), { source: new actor_merge_binding_factory_context_union_1.SetUnionContext() }, new core_1.ActionContext({ source: ['ex:S1', 'ex:S2', 'ex:S3'] }));
    bindingsOther = new bindings_factory_context_1.Bindings(DF, (0, immutable_1.Map)([
        ['f', DF.namedNode('ex:f')],
        ['g', DF.namedNode('ex:g')],
        ['h', DF.namedNode('ex:h')],
        ['i', DF.namedNode('ex:i')],
    ]), { source: new actor_merge_binding_factory_context_union_1.SetUnionContext() }, new core_1.ActionContext({ source: ['ex:S1', 'ex:S2', 'ex:S5', 'ex:S6'] }));
    const start = process.hrtime();
    for (let i = 0; i < nRuns; i++) {
        const result = bindings.merge(bindingsOther);
    }
    const end = process.hrtime(start);
    const endSeconds = (end[0] + end[1] / Math.pow(10, 9));
    // console.log(`Ops/second merge non overlapping, ovelapping context: ${nRuns/endSeconds}`);
    // console.log(`Total time overlapping: ${endSeconds}`);
    return endSeconds;
}
function opsPerSecondNonOverlappingEmptyContext(nRuns) {
    const DF = new rdf_data_factory_1.DataFactory();
    let bindings;
    let bindingsOther;
    bindings = new bindings_factory_context_1.Bindings(DF, (0, immutable_1.Map)([
        ['a', DF.namedNode('ex:a')],
        ['b', DF.namedNode('ex:b')],
        ['c', DF.namedNode('ex:c')],
        ['d', DF.namedNode('ex:d')],
        ['e', DF.namedNode('ex:e')]
    ]), { source: new actor_merge_binding_factory_context_union_1.SetUnionContext() }, new core_1.ActionContext({}));
    bindingsOther = new bindings_factory_context_1.Bindings(DF, (0, immutable_1.Map)([
        ['f', DF.namedNode('ex:f')],
        ['g', DF.namedNode('ex:g')],
        ['h', DF.namedNode('ex:h')],
        ['i', DF.namedNode('ex:i')],
    ]), {}, new core_1.ActionContext({}));
    const start = process.hrtime();
    for (let i = 0; i < nRuns; i++) {
        const result = bindings.merge(bindingsOther);
    }
    const end = process.hrtime(start);
    const endSeconds = (end[0] + end[1] / Math.pow(10, 9));
    // console.log(`Ops/second merge non overlapping, no context: ${nRuns/endSeconds}`);
    // console.log(`Total time overlapping: ${endSeconds}`);
    return endSeconds;
}
function opsPerSecondOverlappingOverlappingContext(nRuns) {
    const DF = new rdf_data_factory_1.DataFactory();
    let bindings;
    let bindingsOther;
    bindings = new bindings_factory_context_1.Bindings(DF, (0, immutable_1.Map)([
        ['a', DF.namedNode('ex:a')],
        ['b', DF.namedNode('ex:b')],
        ['c', DF.namedNode('ex:c')],
        ['d', DF.namedNode('ex:d')],
        ['e', DF.namedNode('ex:e')]
    ]), { source: new actor_merge_binding_factory_context_union_1.SetUnionContext() }, new core_1.ActionContext({ source: ['ex:S1', 'ex:S2', 'ex:S3'] }));
    bindingsOther = new bindings_factory_context_1.Bindings(DF, (0, immutable_1.Map)([
        ['d', DF.namedNode('ex:d')],
        ['a', DF.namedNode('ex:a')],
        ['b', DF.namedNode('ex:b')],
        ['f', DF.namedNode('ex:f')],
    ]), { source: new actor_merge_binding_factory_context_union_1.SetUnionContext() }, new core_1.ActionContext({ source: ['ex:S1', 'ex:S2', 'ex:S5', 'ex:S6'] }));
    const start = process.hrtime();
    for (let i = 0; i < nRuns; i++) {
        const result = bindings.merge(bindingsOther);
    }
    const end = process.hrtime(start);
    const endSeconds = (end[0] + end[1] / Math.pow(10, 9));
    // console.log(`Ops/second merge overlapping, ovelapping context: ${nRuns/endSeconds}`);
    // console.log(`Total time overlapping: ${endSeconds}`);
    return endSeconds;
}
function opsPerSecondOverlappingNoContext(nRuns) {
    const DF = new rdf_data_factory_1.DataFactory();
    let bindings;
    let bindingsOther;
    bindings = new bindings_factory_context_1.Bindings(DF, (0, immutable_1.Map)([
        ['a', DF.namedNode('ex:a')],
        ['b', DF.namedNode('ex:b')],
        ['c', DF.namedNode('ex:c')],
        ['d', DF.namedNode('ex:d')],
        ['e', DF.namedNode('ex:e')]
    ]), {}, new core_1.ActionContext({}));
    bindingsOther = new bindings_factory_context_1.Bindings(DF, (0, immutable_1.Map)([
        ['d', DF.namedNode('ex:d')],
        ['a', DF.namedNode('ex:a')],
        ['b', DF.namedNode('ex:b')],
        ['f', DF.namedNode('ex:f')],
    ]), {}, new core_1.ActionContext({}));
    const start = process.hrtime();
    for (let i = 0; i < nRuns; i++) {
        const result = bindings.merge(bindingsOther);
    }
    const end = process.hrtime(start);
    const endSeconds = (end[0] + end[1] / Math.pow(10, 9));
    // console.log(`Ops/second merge overlapping no context: ${nRuns/endSeconds}`);
    // console.log(`Total time overlapping: ${endSeconds}`);
    return endSeconds;
}
function runExperiments(nReplications, nMerges) {
    const mean_1 = [];
    const mean_2 = [];
    const mean_3 = [];
    const mean_4 = [];
    for (let i = 0; i < nReplications; i++) {
        console.log(`Replication ${i + 1}/${nReplications}`);
        mean_1.push(nMerges / opsPerSecondNonOverlappingOverlappingContext(nMerges));
        mean_2.push(nMerges / opsPerSecondOverlappingOverlappingContext(nMerges));
        mean_3.push(nMerges / opsPerSecondNonOverlappingEmptyContext(nMerges));
        mean_4.push(nMerges / opsPerSecondOverlappingNoContext(nMerges));
    }
    const std_1 = mathjs.std(mean_1);
    const std_2 = mathjs.std(mean_2);
    const std_3 = mathjs.std(mean_3);
    const std_4 = mathjs.std(mean_4);
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
//# sourceMappingURL=runMergeContext.js.map