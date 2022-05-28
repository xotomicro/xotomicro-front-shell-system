import {GlobalStoreClass} from "@xotomicro/xotomicro-front-common-registry"

export class GlobalEventDistributor {
    globalStore: GlobalStoreClass = new GlobalStoreClass()

    handlerList: {event: string; callback: Function}[] = []

    backupEvents: {event: string; payload: string}[] = []

    on(event: string, callback: Function, runBackupEvents = false) {
        this.handlerList.push({event, callback})
        const id = this.handlerList.length - 1
        if (runBackupEvents) {
            for (const backupEvent of this.backupEvents) {
                if (backupEvent.event === event) {
                    callback(backupEvent.payload)
                }
            }
        }
        return id
    }

    off(id: number) {
        this.handlerList.splice(id, 1)
    }

    emit(event: string, payload: any) {
        this.handlerList.filter((handler: any) => handler.event === event).forEach((handler: any) => handler.callback(payload))
        this.backupEvents.push({event, payload})
    }
}
