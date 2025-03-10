// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export function getBaseReportRequest(start: number, end: number): {body: PerformanceReport; headers: {}} {
    return {
        body: {
            version: '0.1.0',
            start,
            end,
            labels: {agent: 'rnapp', platform: 'ios'},
            histograms: [],
            counters: [],
        },
        headers: {},
    };
}
