import { Observable } from 'rxjs';
import { manualObservable } from './manual-observable';
import { errorHandling } from './error-handling';
import { unsubscribeFromObservable } from './unsubscribe';
import { creatingObservables } from './creating';
import { domEvents } from './dom-events';
import { pipelines } from './pipelines';
import { combine } from './combining';
import { flatMapping } from './mapping';
import { autoSearch } from './auto-search';
import { shareObservable } from './share';

// The basics
// manualObservable();
// errorHandling();
// unsubscribeFromObservable();

// Creating observables with RxJS
// creatingObservables();
// domEvents();

// Pipelines
// pipelines();
shareObservable();

// Combining observables
// combine();
// flatMapping();
// autoSearch();
