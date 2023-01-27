import type { IReport } from '@rocket.chat/core-typings';

import type { PaginatedResult } from '../../helpers/PaginatedResult';
import type { ArchiveReportProps } from './ArchiveReportProps';
import type { ReportHistoryProps } from './ReportHistoryProps';

export type ModerationEndpoints = {
	// API endpoint to fetch the reported messages
	'/v1/moderation.history': {
		GET: (params: ReportHistoryProps) => PaginatedResult<{
			reports: IReport[];
		}>;
	};
	'/v1/moderation.hide': {
		POST: (params: ArchiveReportProps) => {
			report: IReport | null;
		};
	};
};