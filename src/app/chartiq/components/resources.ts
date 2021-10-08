// Required imports from chartiq for advanced chart

import { CIQ } from 'chartiq/js/chartiq';
import 'chartiq/js/advanced';

import 'chartiq/js/advanced';

import 'chartiq/js/addOns';

// Symbol mapping to market definition
import 'chartiq/examples/markets/marketDefinitionsSample';
import 'chartiq/examples/markets/marketSymbologySample';

import 'chartiq/examples/feeds/symbolLookupChartIQ';

import 'chartiq/examples/translations/translationSample';

import 'chartiq/js/componentUI';
import 'chartiq/js/components';

// Event Markers
import marker from 'chartiq/examples/markers/markersSample.js';
import 'chartiq/examples/markers/tradeAnalyticsSample';
import 'chartiq/examples/markers/videoSample';

// import 'chartiq/examples/help/helpContent.js'

import quoteFeed from "chartiq/examples/feeds/quoteFeedSimulator.js";

// Uncomment the following for the forecasting simulator (required for the forecasting sample).
// import forecastQuoteFeed from "chartiq/examples/feeds/quoteFeedForecastSimulator.js";

import PerfectScrollbar from "chartiq/js/thirdparty/perfect-scrollbar.esm.js";

import getConfig from 'chartiq/js/defaultConfiguration';

// Plugins

// Crypto, L2 Heat Map, Market Depth,
// import 'chartiq/plugins/activetrader/cryptoiq';

// ScriptIQ
// import 'chartiq/plugins/scriptiq/scriptiq';

// Trading Central: Technical Insights
// import 'chartiq/plugins/technicalinsights/components'

// TFC plugin
// import 'chartiq/plugins/tfc/tfc-loader';
// import 'chartiq/plugins/tfc/tfc-demo';   /* if using demo account class */

// Time Span Events
// import 'chartiq/plugins/timespanevent/timespanevent';
// import 'chartiq/plugins/timespanevent/examples/timeSpanEventSample';  /* if using sample */

// Trading Central: Analyst Views
// import 'chartiq/plugins/analystviews/components';

// Visual Earnings
// import 'chartiq/plugins/visualearnings/visualearnings';

//  Uncomment the following for the L2 simulator (required for the crypto sample and MarketDepth addOn)
// import 'chartiq/examples/feeds/L2_simulator'; /* for use with cryptoiq */

function getDefaultConfig () {
	return getConfig({
		quoteFeed,
		// forecastQuoteFeed, // uncomment to enable forcast quote feed simulator
		markerSample: marker.MarkersSample,
		scrollStyle: PerfectScrollbar,
	});
}

// Creates a complete customised configuration object
function getCustomConfig({
	chartId,
	symbol,
	restore,
	onChartReady
}: {
	chartId?: string
	symbol?: string | { symbol: string; name?: string; exchDisp?: string }
	restore?: boolean
	onChartReady?: Function
} = {}) {
	const config = getDefaultConfig()

	// Update chart configuration by modifying default configuration
	config.chartId = chartId || '_advanced-chart'
	config.initialSymbol = symbol  || symbol === "" ? symbol : {
		symbol: 'AAPL',
		name: 'Apple Inc',
		exchDisp: 'NASDAQ'
	}
	if (typeof restore === 'boolean') config.restore = restore

	if (onChartReady) config.onChartReady = onChartReady

	// Select only plugin configurations that needs to be active for this chart
	const {
		marketDepth,
		tfc,
		timeSpanEventPanel,
		visualEarnings
	} = config.plugins
	config.plugins = {
		// marketDepth,
		// tfc,
		// timeSpanEventPanel,
		// visualEarnings
	}

	// Enable / disable addOns
	// config.enabledAddOns.tooltip = false;
	// config.enabledAddOns.continuousZoom = true;

	return config
}

export { CIQ, getCustomConfig };
