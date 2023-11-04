export interface Task {
	id: string
	title: string
	description: string
	completed: boolean
	date: Date
}
export enum VIEW {
	"EDITOR" = "EDITOR",
	"PREVIEW" = "PREVIEW",
	"NONE" = "NONE",
}
