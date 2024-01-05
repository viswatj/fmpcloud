'use strict'
const { makeRequest, generateJson } = require('./utilities');
/**
 const allParams = [
    [
        commitment_of_traders_report/list
    ],
    [
        symbol_change
    ],
    [
        governance/executive_compensation,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        executive-compensation-benchmark,
        [
            ?year=2022
        ],
        [
            year
        ]
    ],
    [
        company-notes,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        historical/employee_count,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        employee_count,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        company-core-information,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        company-outlook,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        stock_peers,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        pre-post-market-trade/AAPL
    ],
    [
        pre-post-market/AAPL
    ],
    [
        batch-pre-post-market/AAPL
    ],
    [
        batch-pre-post-market-trade/AAPL
    ],
    [
        forex/last/EURUSD
    ],
    [
        crypto/last/BTCUSD
    ],
    [
        financial-reports-dates,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        financial-reports-json,
        [
            ?symbol=AAPL,
            year=2020,
            period=FY
        ],
        [
            symbol,
            year,
            period
        ]
    ],
    [
        financial-reports-xlsx,
        [
            ?symbol=AAPL,
            year=2020,
            period=FY
        ],
        [
            symbol,
            year,
            period
        ]
    ],
    [
        score,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        owner_earnings,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        advanced_discounted_cash_flow,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        advanced_levered_discounted_cash_flow,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        price-target,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        price-target-summary,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        price-target-analyst-name,
        [
            ?name=Tim%20Anderson
        ],
        [
            name
        ]
    ],
    [
        price-target-analyst-company,
        [
            ?company=Barclays
        ],
        [
            company
        ]
    ],
    [
        price-target-consensus,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        price-target-rss-feed,
        [
            ?page=0
        ],
        [
            page
        ]
    ],
    [
        upgrades-downgrades-rss-feed,
        [
            ?page=0
        ],
        [
            page
        ]
    ],
    [
        upgrades-downgrades-consensus,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        upgrades-downgrades-grading-company,
        [
            ?company=Barclay
        ],
        [
            company
        ]
    ],
    [
        general_news,
        [
            ?page=0
        ],
        [
            page
        ]
    ],
    [
        stock-news-sentiments-rss-feed,
        [
            ?page=0
        ],
        [
            page
        ]
    ],
    [
        forex_news,
        [
            ?page=0
        ],
        [
            page
        ]
    ],
    [
        crypto_news,
        [
            ?page=0
        ],
        [
            page
        ]
    ],
    [
        earning_call_transcript,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        batch_earning_call_transcript/AAPL,
        [
            ?year=2020
        ],
        [
            year
        ]
    ],
    [
        rss_feed,
        [
            ?limit=100,
            type=10,
            from=2021-03-10,
            to=2021-05-04,
            isDone=true
        ],
        [
            limit,
            type,
            from,
            to,
            isDone
        ]
    ],
    [
        rss_feed_8k
    ],
    [
        earning-calendar-confirmed,
        [
            ?from=2023-10-10,
            to=2023-08-10
        ],
        [
            from,
            to
        ]
    ],
    [
        ipo-calendar-confirmed,
        [
            ?from=2021-11-10,
            to=2022-02-01
        ],
        [
            from,
            to
        ]
    ],
    [
        ipo-calendar-prospectus
    ],
    [
        mergers-acquisitions-rss-feed,
        [
            ?page=0
        ],
        [
            page
        ]
    ],
    [
        mergers-acquisitions/search,
        [
            ?name=syros
        ],
        [
            name
        ]
    ],
    [
        shares_float,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        shares_float/all
    ],
    [
        etf-holdings/portfolio-date,
        [
            ?symbol=AAPL,
            cik=0000036405
        ],
        [
            symbol,
            cik
        ]
    ],
    [
        etf-holdings,
        [
            ?date=2023-03-31,
            cik=0000036405,
            symbol=AAPL
        ],
        [
            date,
            cik,
            symbol
        ]
    ],
    [
        etf-info,
        [
            ?symbol=SPY
        ],
        [
            symbol
        ]
    ],
    [
        mutual-fund-holdings/portfolio-date,
        [
            ?symbol=AAPL,
            cik=0000036405
        ],
        [
            symbol,
            cik
        ]
    ],
    [
        mutual-fund-holdings,
        [
            ?symbol=AAPL,
            date=2023-03-31,
            cik=0000036405
        ],
        [
            symbol,
            date,
            cik
        ]
    ],
    [
        mutual-fund-holdings/name,
        [
            ?name=Vanguard
        ],
        [
            name
        ]
    ],
    [
        esg-environmental-social-governance-data,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        esg-environmental-social-governance-data-ratings,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        esg-environmental-social-governance-sector-benchmark,
        [
            ?year=2022
        ],
        [
            year
        ]
    ],
    [
        senate-trading,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        senate-trading-rss-feed,
        [
            ?page=0
        ],
        [
            page
        ]
    ],
    [
        senate-disclosure,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        senate-disclosure-rss-feed,
        [
            ?page=0
        ],
        [
            page
        ]
    ],
    [
        sector_price_earning_ratio,
        [
            ?date=2023-10-10,
            exchange=NYSE
        ],
        [
            date,
            exchange
        ]
    ],
    [
        industry_price_earning_ratio,
        [
            ?date=2023-10-10,
            exchange=NYSE
        ],
        [
            date,
            exchange
        ]
    ],
    [
        13f-asset-allocation,
        [
            ?date=2021-09-30
        ],
        [
            date
        ]
    ],
    [
        13f-asset-allocation-date
    ],
    [
        institutional-ownership/list
    ],
    [
        institutional-ownership/name,
        [
            ?name=Berkshire%20Hathaway
        ],
        [
            name
        ]
    ],
    [
        institutional-ownership/portfolio-date,
        [
            ?cik=0001067983
        ],
        [
            cik
        ]
    ],
    [
        institutional-ownership/rss_feed,
        [
            ?page=0
        ],
        [
            page
        ]
    ],
    [
        institutional-ownership/symbol-ownership,
        [
            ?symbol=AAPL,
            includeCurrentQuarter=false
        ],
        [
            symbol,
            includeCurrentQuarter
        ]
    ],
    [
        institutional-ownership/institutional-holders/symbol-ownership-percent,
        [
            ?date=2021-09-30,
            symbol=AAPL
        ],
        [
            date,
            symbol
        ]
    ],
    [
        institutional-ownership/portfolio-holdings-summary,
        [
            ?cik=0001067983,
            page=0
        ],
        [
            cik,
            page
        ]
    ],
    [
        institutional-ownership/industry/portfolio-holdings-summary,
        [
            ?cik=0001067983,
            date=2023-06-30
        ],
        [
            cik,
            date
        ]
    ],
    [
        institutional-ownership/institutional-holders/symbol-ownership,
        [
            ?page=0,
            date=2021-09-30,
            symbol=AAPL
        ],
        [
            page,
            date,
            symbol
        ]
    ],
    [
        institutional-ownership/portfolio-holdings,
        [
            ?date=2023-06-30,
            cik=0001067983,
            page=0
        ],
        [
            date,
            cik,
            page
        ]
    ],
    [
        standard_industrial_classification,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        standard_industrial_classification/all
    ],
    [
        standard_industrial_classification_list
    ],
    [
        insider-trading-rss-feed,
        [
            ?page=0
        ],
        [
            page
        ]
    ],
    [
        insider-trading,
        [
            ?symbol=AAPL,
            page=0
        ],
        [
            symbol,
            page
        ]
    ],
    [
        insider-trading-transaction-type
    ],
    [
        insider-roaster,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        insider-roaster-statistic,
        [
            ?symbol=AAPL
        ],
        [
            symbol
        ]
    ],
    [
        mapper-cik-name,
        [
            ?page=0
        ],
        [
            page
        ]
    ],
    [
        mapper-cik-name,
        [
            ?name=zuckerberg,
            page=0
        ],
        [
            name,
            page
        ]
    ],
    [
        mapper-cik-company/MSFT
    ],
    [
        fail_to_deliver,
        [
            ?symbol=GE,
            page=0
        ],
        [
            symbol,
            page
        ]
    ],
    [
        crowdfunding-offerings-rss-feed,
        [
            ?page=0
        ],
        [
            page
        ]
    ],
    [
        crowdfunding-offerings/search,
        [
            ?name=enotap
        ],
        [
            name
        ]
    ],
    [
        crowdfunding-offerings,
        [
            ?cik=0001916078
        ],
        [
            cik
        ]
    ],
    [
        fundraising-rss-feed,
        [
            ?page=0
        ],
        [
            page
        ]
    ],
    [
        fundraising/search,
        [
            ?name=NJOY
        ],
        [
            name
        ]
    ],
    [
        fundraising,
        [
            ?cik=0001547416
        ],
        [
            cik
        ]
    ],
    [
        treasury,
        [
            ?from=2023-08-10,
            to=2023-10-10
        ],
        [
            from,
            to
        ]
    ],
    [
        economic,
        [
            ?name=GDP
        ],
        [
            name
        ]
    ],
    [
        market_risk_premium
    ],
    [
        commitment_of_traders_report_analysis/M6
    ],
    [
        commitment_of_traders_report_analysis,
        [
            ?from=2023-08-10,
            to=2023-10-10
        ],
        [
            from,
            to
        ]
    ],
    [
        commitment_of_traders_report/M6
    ],
    [
        commitment_of_traders_report,
        [
            ?from=2023-08-10,
            to=2023-10-10
        ],
        [
            from,
            to
        ]
    ],
    [
        revenue-product-segmentation,
        [
            ?symbol=AAPL,
            structure=flat,
            period=annual
        ],
        [
            symbol,
            structure,
            period
        ]
    ],
    [
        revenue-geographic-segmentation,
        [
            ?symbol=AAPL,
            structure=flat
        ],
        [
            symbol,
            structure
        ]
    ],
    [
        historical/social-sentiment,
        [
            ?symbol=AAPL,
            page=0
        ],
        [
            symbol,
            page
        ]
    ],
    [
        social-sentiments/trending,
        [
            ?type=bullish,
            source=stocktwits
        ],
        [
            type,
            source
        ]
    ],
    [
        social-sentiments/change,
        [
            ?type=bullish,
            source=stocktwits
        ],
        [
            type,
            source
        ]
    ],
    [
        batch-request-end-of-day-prices,
        [
            ?date=2021-05-18
        ],
        [
            date
        ]
    ],
    [
        income-statement-bulk,
        [
            ?year=2020,
            period=annual
        ],
        [
            year,
            period
        ]
    ],
    [
        balance-sheet-statement-bulk,
        [
            ?year=2020,
            period=annual
        ],
        [
            year,
            period
        ]
    ],
    [
        cash-flow-statement-bulk,
        [
            ?year=2020,
            period=annual
        ],
        [
            year,
            period
        ]
    ],
    [
        ratios-bulk,
        [
            ?year=2020,
            period=annual
        ],
        [
            year,
            period
        ]
    ],
    [
        key-metrics-bulk,
        [
            ?year=2020,
            period=annual
        ],
        [
            year,
            period
        ]
    ],
    [
        earnings-surprises-bulk
    ],
    [
        profile/all
    ],
    [
        stock_peers_bulk
    ],
    [
        rating-bulk
    ],
    [
        dcf-bulk
    ],
    [
        key-metrics-ttm-bulk
    ],
    [
        ratios-ttm-bulk
    ],
    [
        scores-bulk
    ],
    [
        financial-growth-bulk,
        [
            ?year=2020,
            period=annual
        ],
        [
            year,
            period
        ]
    ],
    [
        income-statement-growth-bulk,
        [
            ?year=2020,
            period=annual
        ],
        [
            year,
            period
        ]
    ],
    [
        balance-sheet-statement-growth-bulk,
        [
            ?year=2020,
            period=annual
        ],
        [
            year,
            period
        ]
    ],
    [
        cash-flow-statement-growth-bulk,
        [
            ?year=2020,
            period=annual
        ],
        [
            year,
            period
        ]
    ],
    [
        price-target-summary-bulk
    ],
    [
        upgrades-downgrades-consensus-bulk
    ],
    [
        etf-holder-bulk
    ]
]; 

allParams.map((param, i) => {
    const url = param[0]; 
    let funcName = String(url).replaceAll(/,_).replaceAll(-,_); 
    funcName = funcName.includes(13f_)?funcName.split(13f_)[1] + _13f: funcName; 
    if(param[2]){   
        const funcInput  = param[2].filter(params => params !== symbol); 
        param[2].push(symbol); 
        return `${funcName} : (${funcInput.join(,)}) => makeRequest('${url}', generateJson(undefined, { ${ param[2].join(,)}}, 'v4'))`  
    }
    return `${funcName} : () => makeRequest('${url}' , generateJson(undefined, {symbol}, 'v4'))`; 
});
 */
 

module.exports = (symbol) => {
    return { 
        commitment_of_traders_report_list: () => makeRequest('commitment_of_traders_report/list', generateJson(undefined, { symbol }, 'v4')),
        symbol_change: () => makeRequest('symbol_change', generateJson(undefined, { symbol }, 'v4')),
        governance_executive_compensation: () => makeRequest('governance/executive_compensation', generateJson(undefined, { symbol }, 'v4')),
        executive_compensation_benchmark: (year) => makeRequest('executive-compensation-benchmark', generateJson(undefined, { year, symbol }, 'v4')),
        company_notes: () => makeRequest('company-notes', generateJson(undefined, { symbol }, 'v4')),
        historical_employee_count: () => makeRequest('historical/employee_count', generateJson(undefined, { symbol }, 'v4')),
        employee_count: () => makeRequest('employee_count', generateJson(undefined, { symbol }, 'v4')),
        company_core_information: () => makeRequest('company-core-information', generateJson(undefined, { symbol }, 'v4')),
        company_outlook: () => makeRequest('company-outlook', generateJson(undefined, { symbol }, 'v4')),
        stock_peers: () => makeRequest('stock_peers', generateJson(undefined, { symbol }, 'v4')),
        pre_post_market_trade_AAPL: () => makeRequest('pre-post-market-trade/AAPL', generateJson(undefined, { symbol }, 'v4')),
        pre_post_market_AAPL: () => makeRequest('pre-post-market/AAPL', generateJson(undefined, { symbol }, 'v4')),
        batch_pre_post_market_AAPL: () => makeRequest('batch-pre-post-market/AAPL', generateJson(undefined, { symbol }, 'v4')),
        batch_pre_post_market_trade_AAPL: () => makeRequest('batch-pre-post-market-trade/AAPL', generateJson(undefined, { symbol }, 'v4')),
        forex_last_EURUSD: () => makeRequest('forex/last/EURUSD', generateJson(undefined, { symbol }, 'v4')),
        crypto_last_BTCUSD: () => makeRequest('crypto/last/BTCUSD', generateJson(undefined, { symbol }, 'v4')),
        financial_reports_dates: () => makeRequest('financial-reports-dates', generateJson(undefined, { symbol }, 'v4')),
        financial_reports_json: (year, period) => makeRequest('financial-reports-json', generateJson(undefined, { symbol, year, period, symbol }, 'v4')),
        financial_reports_xlsx: (year, period) => makeRequest('financial-reports-xlsx', generateJson(undefined, { symbol, year, period, symbol }, 'v4')),
        score: () => makeRequest('score', generateJson(undefined, { symbol }, 'v4')),
        owner_earnings: () => makeRequest('owner_earnings', generateJson(undefined, { symbol }, 'v4')),
        advanced_discounted_cash_flow: () => makeRequest('advanced_discounted_cash_flow', generateJson(undefined, { symbol }, 'v4')),
        advanced_levered_discounted_cash_flow: () => makeRequest('advanced_levered_discounted_cash_flow', generateJson(undefined, { symbol }, 'v4')),
        price_target: () => makeRequest('price-target', generateJson(undefined, { symbol }, 'v4')),
        price_target_summary: () => makeRequest('price-target-summary', generateJson(undefined, { symbol }, 'v4')),
        price_target_analyst_name: (name) => makeRequest('price-target-analyst-name', generateJson(undefined, { name, symbol }, 'v4')),
        price_target_analyst_company: (company) => makeRequest('price-target-analyst-company', generateJson(undefined, { company, symbol }, 'v4')),
        price_target_consensus: () => makeRequest('price-target-consensus', generateJson(undefined, { symbol }, 'v4')),
        price_target_rss_feed: (page) => makeRequest('price-target-rss-feed', generateJson(undefined, { page, symbol }, 'v4')),
        upgrades_downgrades_rss_feed: (page) => makeRequest('upgrades-downgrades-rss-feed', generateJson(undefined, { page, symbol }, 'v4')),
        upgrades_downgrades_consensus: () => makeRequest('upgrades-downgrades-consensus', generateJson(undefined, { symbol }, 'v4')),
        upgrades_downgrades_grading_company: (company) => makeRequest('upgrades-downgrades-grading-company', generateJson(undefined, { company, symbol }, 'v4')),
        general_news: (page) => makeRequest('general_news', generateJson(undefined, { page, symbol }, 'v4')),
        stock_news_sentiments_rss_feed: (page) => makeRequest('stock-news-sentiments-rss-feed', generateJson(undefined, { page, symbol }, 'v4')),
        forex_news: (page) => makeRequest('forex_news', generateJson(undefined, { page, symbol }, 'v4')),
        crypto_news: (page) => makeRequest('crypto_news', generateJson(undefined, { page, symbol }, 'v4')),
        earning_call_transcript: () => makeRequest('earning_call_transcript', generateJson(undefined, { symbol }, 'v4')),
        batch_earning_call_transcript_AAPL: (year) => makeRequest('batch_earning_call_transcript/AAPL', generateJson(undefined, { year, symbol }, 'v4')),
        rss_feed: (limit, type, from, to, isDone) => makeRequest('rss_feed', generateJson(undefined, { limit, type, from, to, isDone, symbol }, 'v4')),
        rss_feed_8k: () => makeRequest('rss_feed_8k', generateJson(undefined, { symbol }, 'v4')),
        earning_calendar_confirmed: (from, to) => makeRequest('earning-calendar-confirmed', generateJson(undefined, { from, to, symbol }, 'v4')),
        ipo_calendar_confirmed: (from, to) => makeRequest('ipo-calendar-confirmed', generateJson(undefined, { from, to, symbol }, 'v4')),
        ipo_calendar_prospectus: () => makeRequest('ipo-calendar-prospectus', generateJson(undefined, { symbol }, 'v4')),
        mergers_acquisitions_rss_feed: (page) => makeRequest('mergers-acquisitions-rss-feed', generateJson(undefined, { page, symbol }, 'v4')),
        mergers_acquisitions_search: (name) => makeRequest('mergers-acquisitions/search', generateJson(undefined, { name, symbol }, 'v4')),
        shares_float: () => makeRequest('shares_float', generateJson(undefined, { symbol }, 'v4')),
        shares_float_all: () => makeRequest('shares_float/all', generateJson(undefined, { symbol }, 'v4')),
        etf_holdings_portfolio_date: (cik) => makeRequest('etf-holdings/portfolio-date', generateJson(undefined, { symbol, cik, symbol }, 'v4')),
        etf_holdings: (date, cik) => makeRequest('etf-holdings', generateJson(undefined, { date, cik, symbol }, 'v4')),
        etf_info: () => makeRequest('etf-info', generateJson(undefined, { symbol }, 'v4')),
        mutual_fund_holdings_portfolio_date: (cik) => makeRequest('mutual-fund-holdings/portfolio-date', generateJson(undefined, { symbol, cik, symbol }, 'v4')),
        mutual_fund_holdings: (date, cik) => makeRequest('mutual-fund-holdings', generateJson(undefined, { symbol, date, cik, symbol }, 'v4')),
        mutual_fund_holdings_name: (name) => makeRequest('mutual-fund-holdings/name', generateJson(undefined, { name, symbol }, 'v4')),
        esg_environmental_social_governance_data: () => makeRequest('esg-environmental-social-governance-data', generateJson(undefined, { symbol }, 'v4')),
        esg_environmental_social_governance_data_ratings: () => makeRequest('esg-environmental-social-governance-data-ratings', generateJson(undefined, { symbol }, 'v4')),
        esg_environmental_social_governance_sector_benchmark: (year) => makeRequest('esg-environmental-social-governance-sector-benchmark', generateJson(undefined, { year, symbol }, 'v4')),
        senate_trading: () => makeRequest('senate-trading', generateJson(undefined, { symbol }, 'v4')),
        senate_trading_rss_feed: (page) => makeRequest('senate-trading-rss-feed', generateJson(undefined, { page, symbol }, 'v4')),
        senate_disclosure: () => makeRequest('senate-disclosure', generateJson(undefined, { symbol }, 'v4')),
        senate_disclosure_rss_feed: (page) => makeRequest('senate-disclosure-rss-feed', generateJson(undefined, { page, symbol }, 'v4')),
        sector_price_earning_ratio: (date, exchange) => makeRequest('sector_price_earning_ratio', generateJson(undefined, { date, exchange, symbol }, 'v4')),
        industry_price_earning_ratio: (date, exchange) => makeRequest('industry_price_earning_ratio', generateJson(undefined, { date, exchange, symbol }, 'v4')),
        asset_allocation_13f: (date) => makeRequest('13f-asset-allocation', generateJson(undefined, { date, symbol }, 'v4')),
        asset_allocation_date_13f: () => makeRequest('13f-asset-allocation-date', generateJson(undefined, { symbol }, 'v4')),
        institutional_ownership_list: () => makeRequest('institutional-ownership/list', generateJson(undefined, { symbol }, 'v4')),
        institutional_ownership_name: (name) => makeRequest('institutional-ownership/name', generateJson(undefined, { name, symbol }, 'v4')),
        institutional_ownership_portfolio_date: (cik) => makeRequest('institutional-ownership/portfolio-date', generateJson(undefined, { cik, symbol }, 'v4')),
        institutional_ownership_rss_feed: (page) => makeRequest('institutional-ownership/rss_feed', generateJson(undefined, { page, symbol }, 'v4')),
        institutional_ownership_symbol_ownership: (includeCurrentQuarter) => makeRequest('institutional-ownership/symbol-ownership', generateJson(undefined, { symbol, includeCurrentQuarter, symbol }, 'v4')),
        institutional_ownership_institutional_holders_symbol_ownership_percent: (date) => makeRequest('institutional-ownership/institutional-holders/symbol-ownership-percent', generateJson(undefined, { date, symbol }, 'v4')),
        institutional_ownership_portfolio_holdings_summary: (cik, page) => makeRequest('institutional-ownership/portfolio-holdings-summary', generateJson(undefined, { cik, page, symbol }, 'v4')),
        institutional_ownership_industry_portfolio_holdings_summary: (cik, date) => makeRequest('institutional-ownership/industry/portfolio-holdings-summary', generateJson(undefined, { cik, date, symbol }, 'v4')),
        institutional_ownership_institutional_holders_symbol_ownership: (page, date) => makeRequest('institutional-ownership/institutional-holders/symbol-ownership', generateJson(undefined, { page, date, symbol }, 'v4')),
        institutional_ownership_portfolio_holdings: (date, cik, page) => makeRequest('institutional-ownership/portfolio-holdings', generateJson(undefined, { date, cik, page, symbol }, 'v4')),
        standard_industrial_classification: () => makeRequest('standard_industrial_classification', generateJson(undefined, { symbol }, 'v4')),
        standard_industrial_classification_all: () => makeRequest('standard_industrial_classification/all', generateJson(undefined, { symbol }, 'v4')),
        standard_industrial_classification_list: () => makeRequest('standard_industrial_classification_list', generateJson(undefined, { symbol }, 'v4')),
        insider_trading_rss_feed: (page) => makeRequest('insider-trading-rss-feed', generateJson(undefined, { page, symbol }, 'v4')),
        insider_trading: (page) => makeRequest('insider-trading', generateJson(undefined, { symbol, page, symbol }, 'v4')),
        insider_trading_transaction_type: () => makeRequest('insider-trading-transaction-type', generateJson(undefined, { symbol }, 'v4')),
        insider_roaster: () => makeRequest('insider-roaster', generateJson(undefined, { symbol }, 'v4')),
        insider_roaster_statistic: () => makeRequest('insider-roaster-statistic', generateJson(undefined, { symbol }, 'v4')),
        mapper_cik_name: (page) => makeRequest('mapper-cik-name', generateJson(undefined, { page, symbol }, 'v4')),
        mapper_cik_name: (name, page) => makeRequest('mapper-cik-name', generateJson(undefined, { name, page, symbol }, 'v4')),
        mapper_cik_company_MSFT: () => makeRequest('mapper-cik-company/MSFT', generateJson(undefined, { symbol }, 'v4')),
        fail_to_deliver: (page) => makeRequest('fail_to_deliver', generateJson(undefined, { symbol, page, symbol }, 'v4')),
        crowdfunding_offerings_rss_feed: (page) => makeRequest('crowdfunding-offerings-rss-feed', generateJson(undefined, { page, symbol }, 'v4')),
        crowdfunding_offerings_search: (name) => makeRequest('crowdfunding-offerings/search', generateJson(undefined, { name, symbol }, 'v4')),
        crowdfunding_offerings: (cik) => makeRequest('crowdfunding-offerings', generateJson(undefined, { cik, symbol }, 'v4')),
        fundraising_rss_feed: (page) => makeRequest('fundraising-rss-feed', generateJson(undefined, { page, symbol }, 'v4')),
        fundraising_search: (name) => makeRequest('fundraising/search', generateJson(undefined, { name, symbol }, 'v4')),
        fundraising: (cik) => makeRequest('fundraising', generateJson(undefined, { cik, symbol }, 'v4')),
        treasury: (from, to) => makeRequest('treasury', generateJson(undefined, { from, to, symbol }, 'v4')),
        economic: (name) => makeRequest('economic', generateJson(undefined, { name, symbol }, 'v4')),
        market_risk_premium: () => makeRequest('market_risk_premium', generateJson(undefined, { symbol }, 'v4')),
        commitment_of_traders_report_analysis_M6: () => makeRequest('commitment_of_traders_report_analysis/M6', generateJson(undefined, { symbol }, 'v4')),
        commitment_of_traders_report_analysis: (from, to) => makeRequest('commitment_of_traders_report_analysis', generateJson(undefined, { from, to, symbol }, 'v4')),
        commitment_of_traders_report_M6: () => makeRequest('commitment_of_traders_report/M6', generateJson(undefined, { symbol }, 'v4')),
        commitment_of_traders_report: (from, to) => makeRequest('commitment_of_traders_report', generateJson(undefined, { from, to, symbol }, 'v4')),
        revenue_product_segmentation: (structure, period) => makeRequest('revenue-product-segmentation', generateJson(undefined, { symbol, structure, period, symbol }, 'v4')),
        revenue_geographic_segmentation: (structure) => makeRequest('revenue-geographic-segmentation', generateJson(undefined, { symbol, structure, symbol }, 'v4')),
        historical_social_sentiment: (page) => makeRequest('historical/social-sentiment', generateJson(undefined, { symbol, page, symbol }, 'v4')),
        social_sentiments_trending: (type, source) => makeRequest('social-sentiments/trending', generateJson(undefined, { type, source, symbol }, 'v4')),
        social_sentiments_change: (type, source) => makeRequest('social-sentiments/change', generateJson(undefined, { type, source, symbol }, 'v4')),
        batch_request_end_of_day_prices: (date) => makeRequest('batch-request-end-of-day-prices', generateJson(undefined, { date, symbol }, 'v4')),
        income_statement_bulk: (year, period) => makeRequest('income-statement-bulk', generateJson(undefined, { year, period, symbol }, 'v4')),
        balance_sheet_statement_bulk: (year, period) => makeRequest('balance-sheet-statement-bulk', generateJson(undefined, { year, period, symbol }, 'v4')),
        cash_flow_statement_bulk: (year, period) => makeRequest('cash-flow-statement-bulk', generateJson(undefined, { year, period, symbol }, 'v4')),
        ratios_bulk: (year, period) => makeRequest('ratios-bulk', generateJson(undefined, { year, period, symbol }, 'v4')),
        key_metrics_bulk: (year, period) => makeRequest('key-metrics-bulk', generateJson(undefined, { year, period, symbol }, 'v4')),
        earnings_surprises_bulk: () => makeRequest('earnings-surprises-bulk', generateJson(undefined, { symbol }, 'v4')),
        profile_all: () => makeRequest('profile/all', generateJson(undefined, { symbol }, 'v4')),
        stock_peers_bulk: () => makeRequest('stock_peers_bulk', generateJson(undefined, { symbol }, 'v4')),
        rating_bulk: () => makeRequest('rating-bulk', generateJson(undefined, { symbol }, 'v4')),
        dcf_bulk: () => makeRequest('dcf-bulk', generateJson(undefined, { symbol }, 'v4')),
        key_metrics_ttm_bulk: () => makeRequest('key-metrics-ttm-bulk', generateJson(undefined, { symbol }, 'v4')),
        ratios_ttm_bulk: () => makeRequest('ratios-ttm-bulk', generateJson(undefined, { symbol }, 'v4')),
        scores_bulk: () => makeRequest('scores-bulk', generateJson(undefined, { symbol }, 'v4')),
        financial_growth_bulk: (year, period) => makeRequest('financial-growth-bulk', generateJson(undefined, { year, period, symbol }, 'v4')),
        income_statement_growth_bulk: (year, period) => makeRequest('income-statement-growth-bulk', generateJson(undefined, { year, period, symbol }, 'v4')),
        balance_sheet_statement_growth_bulk: (year, period) => makeRequest('balance-sheet-statement-growth-bulk', generateJson(undefined, { year, period, symbol }, 'v4')),
        cash_flow_statement_growth_bulk: (year, period) => makeRequest('cash-flow-statement-growth-bulk', generateJson(undefined, { year, period, symbol }, 'v4')),
        price_target_summary_bulk: () => makeRequest('price-target-summary-bulk', generateJson(undefined, { symbol }, 'v4')),
        upgrades_downgrades_consensus_bulk: () => makeRequest('upgrades-downgrades-consensus-bulk', generateJson(undefined, { symbol }, 'v4')),
        etf_holder_bulk: () => makeRequest('etf-holder-bulk', generateJson(undefined, { symbol }, 'v4'))

    }
};