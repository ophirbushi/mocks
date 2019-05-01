const express = require('express');

const app = express();


app.get('/oee', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const { orderStep, shift, last24Hours, timeRange, from, to } = req.query;

    switch (true) {
        case JSON.parse(orderStep || 'false'):
            res.json({
                gauges: [{ min: 10, max: 20, warnAt: 14, dangerAt: 15 }, { min: 10, max: 20, warnAt: 14, dangerAt: 15 }, { min: 10, max: 20, warnAt: 14, dangerAt: 15 }, { min: 10, max: 20, warnAt: 14, dangerAt: 15 }]
                , "timeline": getTimelineData()
            });
            break;

        case JSON.parse(shift || 'false'):
            res.json({
                gauges: [{ min: 20, max: 30, warnAt: 24, dangerAt: 25 }, { min: 20, max: 30, warnAt: 24, dangerAt: 25 }, { min: 20, max: 30, warnAt: 24, dangerAt: 25 }, { min: 20, max: 30, warnAt: 24, dangerAt: 25 }]
                , "timeline": getTimelineData()

            });
            break;

        case JSON.parse(last24Hours || 'false'):
            res.json({
                gauges: [{ min: 10, max: 250, warnAt: 140, dangerAt: 150 }, { min: 10, max: 250, warnAt: 140, dangerAt: 150 }, { min: 10, max: 250, warnAt: 140, dangerAt: 150 }, { min: 10, max: 250, warnAt: 140, dangerAt: 150 }]
                , "timeline": getTimelineData()

            });
            break;

        case JSON.parse(timeRange || 'false'): {
            let fromParsed = JSON.parse(from || '{}');
            let toParsed = JSON.parse(to || '{}');

            res.json({
                "gauges": [{ min: 10, max: 420, warnAt: 104, dangerAt: 150 }, { min: 10, max: 420, warnAt: 104, dangerAt: 150 }, { min: 10, max: 420, warnAt: 104, dangerAt: 150 }, { min: 10, max: 420, warnAt: 104, dangerAt: 150 }],
                "timeline": getTimelineData()
            });
            break;
        }

        default:
            res.json({
                "gauges": [{ min: 50, max: 120, warnAt: 59, dangerAt: 70 }, { min: 50, max: 120, warnAt: 59, dangerAt: 70 }, { min: 50, max: 120, warnAt: 59, dangerAt: 70 }, { min: 50, max: 120, warnAt: 59, dangerAt: 70 }],
                "timeline": getTimelineData()
            });
            break;
    }

});

function getTimelineData() {
    return {
        "timespans": [
            { "start": 12367487687673, "end": 12367487707673, "labelId": "1" },
            { "start": 136876283682763, "end": 136876283892763, "labelId": "2" }
        ],
        "labels": [
            { "color": "#ad42cc", "id": "1", "label": "Preprocess" },
            { "color": "#c1223a", "id": "2", "label": "Work" }
        ]
    };
}

app.listen(3000, () => console.log('listening on port 3000'));
