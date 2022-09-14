export type Action = {
    name: string,
    event: Promise<any>
}

export const Sleep: Action = {
    name: 'Sleep',
    event: new Promise<any>(resolve => {
        console.log('Sleep');
        resolve('Sleep');
    })
}

export const Eat: Action = 
{
    name: 'Eat',
    event: new Promise<any>(resolve => {
        console.log('Eat');
        resolve('Eat');
    })
}

export const Jump: Action = 
{
    name: 'Jump',
    event: new Promise<any>(resolve => {
        console.log('JUmp');
        resolve('JUmp');
    })
}

export const Crouch: Action =
{
    name: 'Crouch',
    event: new Promise<any>(resolve => {
        console.log('Crouch');
        resolve('Crouch');
    })
}