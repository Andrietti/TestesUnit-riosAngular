import { Injectable } from "@angular/core";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class UniqueIdService{
    private numberOfGeneratedIds = 0;

    public generateUniqueIdWithPrefix(prefix: string): string {
        if(!prefix) {
            throw new Error('Prefix can not be empty');
        }
        const uniqueId = this.generateUniqueIds();
        this.numberOfGeneratedIds++;
        return prefix + '-' + uniqueId;
    }

    public getNumberOfGeneratedUniqueIds(): number {
        return this.numberOfGeneratedIds;
    }
    
    private generateUniqueIds(): string {
        return uuidv4();   
    }    
}