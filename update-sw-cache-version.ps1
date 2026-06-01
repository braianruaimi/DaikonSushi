$buildDate = Get-Date -Format yyyyMMdd
$serviceWorkerPath = (Resolve-Path "./service-worker.js").Path
$indexPath = (Resolve-Path "./index.html").Path
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$content = [System.IO.File]::ReadAllText($serviceWorkerPath, $utf8NoBom)
$pattern = 'const CACHE_NAME = "daikon-sushi-" \+ "\d{8}";'
$replacement = 'const CACHE_NAME = "daikon-sushi-" + "' + $buildDate + '";'

$updatedContent = $content -replace $pattern, $replacement

$indexContent = [System.IO.File]::ReadAllText($indexPath, $utf8NoBom)
$indexContent = $indexContent -replace 'href="style\.css\?v=[^"]+"', ('href="style.css?v=' + $buildDate + '"')
$indexContent = $indexContent -replace 'src="app\.js\?v=[^"]+"', ('src="app.js?v=' + $buildDate + '"')

[System.IO.File]::WriteAllText($serviceWorkerPath, $updatedContent, $utf8NoBom)
[System.IO.File]::WriteAllText($indexPath, $indexContent, $utf8NoBom)

Write-Output "service-worker.js e index.html actualizados con version $buildDate"