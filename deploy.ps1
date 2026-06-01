param(
  [string]$PublishCommand = ""
)

$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$updateScript = Join-Path $projectRoot "update-sw-cache-version.ps1"

if (-not (Test-Path $updateScript)) {
  throw "No se encontró update-sw-cache-version.ps1 en la raíz del proyecto."
}

Write-Output "Actualizando versión del service worker..."
& $updateScript

if ([string]::IsNullOrWhiteSpace($PublishCommand)) {
  Write-Output "Versión actualizada. Para completar el deploy, ejecutá este script con -PublishCommand 'tu comando'."
  exit 0
}

Write-Output "Ejecutando deploy..."
Invoke-Expression $PublishCommand