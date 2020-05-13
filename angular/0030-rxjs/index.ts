import { Observable } from 'rxjs';
import { manualObservable } from './manual-observable';
import { errorHandling } from './error-handling';
import { unsubscribeFromObservable } from './unsubscribe';
import { creatingObservables } from './creating';
import { domEvents } from './dom-events';
import { pipelines } from './pipelines';
import { combine } from './combining';
import { flatMapping } from './mapping';

// The basics
// manualObservable();
// errorHandling();
// unsubscribeFromObservable();

// Creating observables with RxJS
// creatingObservables();
// domEvents();

// Pipelines
// pipelines();

// Combining observables
combine();
flatMapping();
