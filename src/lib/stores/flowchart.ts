import { writable } from 'svelte/store';

export interface FlowchartNode {
	id: string;
	type: 'decision' | 'process' | 'document' | 'endpoint';
	content: string;
	connections: string[];
	metadata: {
		documents?: string[];
		videos?: string[];
		subFlowcharts?: string[];
	};
	position: { x: number; y: number };
}

export interface UserProgress {
	flowchartId: string;
	completedNodes: string[];
	bookmarks: string[];
	notes: Record<string, string>;
	lastPosition: string;
}

export const flowchartStore = writable<FlowchartNode[]>([]);
export const userProgressStore = writable<UserProgress[]>([]);
export const currentNodeStore = writable<string | null>(null);