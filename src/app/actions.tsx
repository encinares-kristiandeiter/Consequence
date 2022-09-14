export type Action = {
    name: string,
    function: (value: any) => void
}

export const Eat: Action = 
{
    name: 'Eat',
    function: resolve => { 
        console.log('Eat')
        resolve(); 
    }
}

export const Jump: Action = 
{
    name: 'Jump',
    function: resolve => { 
        console.log('Jump')
        resolve(); 
    }
}

export const Crouch: Action =
{
    name: 'Crouch',
    function: resolve => { 
        console.log('Crouch')
        resolve(); 
    }
}

export const Sleep: Action = {
    name: 'Sleep',
    function: resolve => { 
        setTimeout(() => { 
            console.log('Sleep')
            resolve(); 
        }, 1000) 
    }
}