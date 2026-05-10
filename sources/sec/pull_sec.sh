#!/bin/bash
SEC_DIR="/root/data/disk/liquid-cooling-ecosystem/sources/sec"
UA="haiwu-research/1.0 (contact@mccd.site)"
DATE=$(date +%Y-%m-%d)

declare -A TICKERS
TICKERS["NVDA"]="0001045810|gpu"
TICKERS["AMD"]="0000002488|gpu"
TICKERS["INTC"]="0000050863|gpu"
TICKERS["GOOG"]="0001652044|ott"
TICKERS["AMZN"]="0001018724|ott"
TICKERS["META"]="0001326801|ott"
TICKERS["MSFT"]="0000789019|ott"
TICKERS["BIDU"]="0001329099|ott"
TICKERS["JD"]="0001549802|ott"
TICKERS["DELL"]="0001571996|oem"
TICKERS["SMCI"]="0001375365|oem"
TICKERS["VRT"]="0001674101|oem"
TICKERS["NVENT"]="0001720638|oem"

echo "=== SEC EDGAR Pull ${DATE} ==="
for TICKER in "${!TICKERS[@]}"; do
    IFS='|' read -r CIK CAT <<< "${TICKERS[$TICKER]}"
    OUTDIR="$SEC_DIR/$CAT/$TICKER"
    mkdir -p "$OUTDIR"
    URL="https://data.sec.gov/submissions/CIK${CIK}.json"
    OUTFILE="$OUTDIR/submissions_${DATE}.json"
    curl -s -A "$UA" -o "$OUTFILE" "$URL"
    if [ -s "$OUTFILE" ]; then
        SIZE=$(wc -c < "$OUTFILE")
        echo "  $TICKER ✅ ${SIZE}B"
    else
        echo "  $TICKER ❌"
    fi
    sleep 0.5
done

echo "Done: $(find $SEC_DIR -name "submissions_${DATE}.json" | wc -l) files"
