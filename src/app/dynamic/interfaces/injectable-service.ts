import { DynamicComponent } from './../dynamic-component';

export interface InjectableService {
    getComponents(): DynamicComponent[];
}
