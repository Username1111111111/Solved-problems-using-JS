interface Obj {
    userId: number,
    id: number,
    title: string,
    info: Info,
    tags: Tag[]
}

interface Info {
    desc: string,
    isActive: boolean
}

interface Tag {
    name: string,
    value: number
}