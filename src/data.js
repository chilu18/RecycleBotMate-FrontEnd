import React from 'react';
import Plot from 'react-plotly.js';

class Data extends React.Component {
  render() {
    return (
        <Plot
        data={[
          {
            x: ['17:41:08', '17:45:10', '17:49:12', '17:51:14', '18:11:16', '18:21:18', '18:31:20', '18:41:22', '19:11:24', '19:21:26', '19:31:28', '20:11:30', '20:21:32', '20:31:34', '20:41:36', '20:51:38', '21:11:40', '21:21:42', '21:31:44', '21:41:46', '21:51:48', '21:51:50', '21:53:52', '17:41:54', '17:41:56', '17:41:58', '17:42:00'],
            y: ['11', '10', '14', '13', '15', '15.9', '14', '16', '17', '14', '12', '10', '19', '11', '17', '15', '14', '12', '12', '13', '13', '12', '13', '13', '13', '13', '13'],
            name: 'Moisture',
            type: 'line',
            mode: 'lines+markers',
            marker: {color: 'green'},
          },

        ]}
        layout={ {xaxis:{title: 'Time[S]'}, yaxis: {title: 'RecycleBot Conversations'}, width: 500, height: 600, title: 'Messages'} }
      />
    );
  }
}
export default Data;