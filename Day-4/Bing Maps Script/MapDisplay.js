﻿var map;
var infoBox;

function GetMap() {

    //Set up the map
    map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), { credentials: "{Your Bing Key}", zoom: 1 });

    //Add the infobox but hide it for now
    infoBox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(0, 0), { visible: false, offset: new Microsoft.Maps.Point(0, 20) });
    infoBox.setMap(map);
}

function DisplayInfoBox(e) {
    if (e.targetType == 'pushpin') {

        //Formulate the HTML for the infobox
        var htmlPinContent = "<div class='push-pin'>" + 
            "<a href='" + displayUrl + e.target.ID + "'>" +
            "<p>" + e.target.Title + "</p>" +
            "<img height='80' width='80' src='" + pictureUrl + e.target.ID + "' />" +
            "</a>" +
            "</div>";

        //Set the location of the infobox and display it with the HTML
        infoBox.setLocation(e.target.getLocation());
        infoBox.setOptions({ visible: true, showPointer: true, htmlContent: htmlPinContent });
    }
}



// SIG // Begin signature block
// SIG // MIIaqQYJKoZIhvcNAQcCoIIamjCCGpYCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFLflp/2pfZCr
// SIG // KfCWVPy/PnqQOimUoIIVeTCCBLowggOioAMCAQICCmEC
// SIG // jkIAAAAAAB8wDQYJKoZIhvcNAQEFBQAwdzELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjEhMB8GA1UEAxMYTWljcm9zb2Z0IFRp
// SIG // bWUtU3RhbXAgUENBMB4XDTEyMDEwOTIyMjU1OFoXDTEz
// SIG // MDQwOTIyMjU1OFowgbMxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // DTALBgNVBAsTBE1PUFIxJzAlBgNVBAsTHm5DaXBoZXIg
// SIG // RFNFIEVTTjpGNTI4LTM3NzctOEE3NjElMCMGA1UEAxMc
// SIG // TWljcm9zb2Z0IFRpbWUtU3RhbXAgU2VydmljZTCCASIw
// SIG // DQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJbsjkdN
// SIG // VMJclYDXTgs9v5dDw0vjYGcRLwFNDNjRRi8QQN4LpFBS
// SIG // EogLQ3otP+5IbmbHkeYDym7sealqI5vNYp7NaqQ/56ND
// SIG // /2JHobS6RPrfQMGFVH7ooKcsQyObUh8yNfT+mlafjWN3
// SIG // ezCeCjOFchvKSsjMJc3bXREux7CM8Y9DSEcFtXogC+Xz
// SIG // 78G69LPYzTiP+yGqPQpthRfQyueGA8Azg7UlxMxanMTD
// SIG // 2mIlTVMlFGGP+xvg7PdHxoBF5jVTIzZ3yrDdmCs5wHU1
// SIG // D92BTCE9djDFsrBlcylIJ9jC0rCER7t4utV0A97XSxn3
// SIG // U9542ob3YYgmM7RHxqBUiBUrLHUCAwEAAaOCAQkwggEF
// SIG // MB0GA1UdDgQWBBQv6EbIaNNuT7Ig0N6JTvFH7kjB8jAf
// SIG // BgNVHSMEGDAWgBQjNPjZUkZwCu1A+3b7syuwwzWzDzBU
// SIG // BgNVHR8ETTBLMEmgR6BFhkNodHRwOi8vY3JsLm1pY3Jv
// SIG // c29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9NaWNyb3Nv
// SIG // ZnRUaW1lU3RhbXBQQ0EuY3JsMFgGCCsGAQUFBwEBBEww
// SIG // SjBIBggrBgEFBQcwAoY8aHR0cDovL3d3dy5taWNyb3Nv
// SIG // ZnQuY29tL3BraS9jZXJ0cy9NaWNyb3NvZnRUaW1lU3Rh
// SIG // bXBQQ0EuY3J0MBMGA1UdJQQMMAoGCCsGAQUFBwMIMA0G
// SIG // CSqGSIb3DQEBBQUAA4IBAQBz/30unc2NiCt8feNeFXHp
// SIG // aGLwCLZDVsRcSi1o2PlIEZHzEZyF7BLUVKB1qTihWX91
// SIG // 7sb1NNhUpOLQzHyXq5N1MJcHHQRTLDZ/f/FAHgybgOIS
// SIG // CiA6McAHdWfg+jSc7Ij7VxzlWGIgkEUvXUWpyI6zfHJt
// SIG // ECfFS9hvoqgSs201I2f6LNslLbldsR4F50MoPpwFdnfx
// SIG // Jd4FRxlt3kmFodpKSwhGITWodTZMt7MIqt+3K9m+Kmr9
// SIG // 3zUXzD8Mx90Gz06UJGMgCy4krl9DRBJ6XN0326RFs5E6
// SIG // Eld940fGZtPPnEZW9EwHseAMqtX21Tyi4LXU+Bx+BFUQ
// SIG // axj0kc1Rp5VlMIIE7DCCA9SgAwIBAgITMwAAALARrwqL
// SIG // 0Duf3QABAAAAsDANBgkqhkiG9w0BAQUFADB5MQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSMwIQYDVQQDExpNaWNyb3NvZnQg
// SIG // Q29kZSBTaWduaW5nIFBDQTAeFw0xMzAxMjQyMjMzMzla
// SIG // Fw0xNDA0MjQyMjMzMzlaMIGDMQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMQ0wCwYDVQQLEwRNT1BSMR4wHAYDVQQDExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24wggEiMA0GCSqGSIb3DQEB
// SIG // AQUAA4IBDwAwggEKAoIBAQDor1yiIA34KHy8BXt/re7r
// SIG // dqwoUz8620B9s44z5lc/pVEVNFSlz7SLqT+oN+EtUO01
// SIG // Fk7vTXrbE3aIsCzwWVyp6+HXKXXkG4Unm/P4LZ5BNisL
// SIG // QPu+O7q5XHWTFlJLyjPFN7Dz636o9UEVXAhlHSE38Cy6
// SIG // IgsQsRCddyKFhHxPuRuQsPWj/ov0DJpOoPXJCiHiquMB
// SIG // Nkf9L4JqgQP1qTXclFed+0vUDoLbOI8S/uPWenSIZOFi
// SIG // xCUuKq6dGB8OHrbCryS0DlC83hyTXEmmebW22875cHso
// SIG // AYS4KinPv6kFBeHgD3FN/a1cI4Mp68fFSsjoJ4TTfsZD
// SIG // C5UABbFPZXHFAgMBAAGjggFgMIIBXDATBgNVHSUEDDAK
// SIG // BggrBgEFBQcDAzAdBgNVHQ4EFgQUWXGmWjNN2pgHgP+E
// SIG // Hr6H+XIyQfIwUQYDVR0RBEowSKRGMEQxDTALBgNVBAsT
// SIG // BE1PUFIxMzAxBgNVBAUTKjMxNTk1KzRmYWYwYjcxLWFk
// SIG // MzctNGFhMy1hNjcxLTc2YmMwNTIzNDRhZDAfBgNVHSME
// SIG // GDAWgBTLEejK0rQWWAHJNy4zFha5TJoKHzBWBgNVHR8E
// SIG // TzBNMEugSaBHhkVodHRwOi8vY3JsLm1pY3Jvc29mdC5j
// SIG // b20vcGtpL2NybC9wcm9kdWN0cy9NaWNDb2RTaWdQQ0Ff
// SIG // MDgtMzEtMjAxMC5jcmwwWgYIKwYBBQUHAQEETjBMMEoG
// SIG // CCsGAQUFBzAChj5odHRwOi8vd3d3Lm1pY3Jvc29mdC5j
// SIG // b20vcGtpL2NlcnRzL01pY0NvZFNpZ1BDQV8wOC0zMS0y
// SIG // MDEwLmNydDANBgkqhkiG9w0BAQUFAAOCAQEAMdduKhJX
// SIG // M4HVncbr+TrURE0Inu5e32pbt3nPApy8dmiekKGcC8N/
// SIG // oozxTbqVOfsN4OGb9F0kDxuNiBU6fNutzrPJbLo5LEV9
// SIG // JBFUJjANDf9H6gMH5eRmXSx7nR2pEPocsHTyT2lrnqkk
// SIG // hNrtlqDfc6TvahqsS2Ke8XzAFH9IzU2yRPnwPJNtQtjo
// SIG // fOYXoJtoaAko+QKX7xEDumdSrcHps3Om0mPNSuI+5PNO
// SIG // /f+h4LsCEztdIN5VP6OukEAxOHUoXgSpRm3m9Xp5QL0f
// SIG // zehF1a7iXT71dcfmZmNgzNWahIeNJDD37zTQYx2xQmdK
// SIG // Dku/Og7vtpU6pzjkJZIIpohmgjCCBbwwggOkoAMCAQIC
// SIG // CmEzJhoAAAAAADEwDQYJKoZIhvcNAQEFBQAwXzETMBEG
// SIG // CgmSJomT8ixkARkWA2NvbTEZMBcGCgmSJomT8ixkARkW
// SIG // CW1pY3Jvc29mdDEtMCsGA1UEAxMkTWljcm9zb2Z0IFJv
// SIG // b3QgQ2VydGlmaWNhdGUgQXV0aG9yaXR5MB4XDTEwMDgz
// SIG // MTIyMTkzMloXDTIwMDgzMTIyMjkzMloweTELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjEjMCEGA1UEAxMaTWljcm9zb2Z0IENv
// SIG // ZGUgU2lnbmluZyBQQ0EwggEiMA0GCSqGSIb3DQEBAQUA
// SIG // A4IBDwAwggEKAoIBAQCycllcGTBkvx2aYCAgQpl2U2w+
// SIG // G9ZvzMvx6mv+lxYQ4N86dIMaty+gMuz/3sJCTiPVcgDb
// SIG // NVcKicquIEn08GisTUuNpb15S3GbRwfa/SXfnXWIz6pz
// SIG // RH/XgdvzvfI2pMlcRdyvrT3gKGiXGqelcnNW8ReU5P01
// SIG // lHKg1nZfHndFg4U4FtBzWwW6Z1KNpbJpL9oZC/6SdCni
// SIG // di9U3RQwWfjSjWL9y8lfRjFQuScT5EAwz3IpECgixzdO
// SIG // PaAyPZDNoTgGhVxOVoIoKgUyt0vXT2Pn0i1i8UU956wI
// SIG // APZGoZ7RW4wmU+h6qkryRs83PDietHdcpReejcsRj1Y8
// SIG // wawJXwPTAgMBAAGjggFeMIIBWjAPBgNVHRMBAf8EBTAD
// SIG // AQH/MB0GA1UdDgQWBBTLEejK0rQWWAHJNy4zFha5TJoK
// SIG // HzALBgNVHQ8EBAMCAYYwEgYJKwYBBAGCNxUBBAUCAwEA
// SIG // ATAjBgkrBgEEAYI3FQIEFgQU/dExTtMmipXhmGA7qDFv
// SIG // pjy82C0wGQYJKwYBBAGCNxQCBAweCgBTAHUAYgBDAEEw
// SIG // HwYDVR0jBBgwFoAUDqyCYEBWJ5flJRP8KuEKU5VZ5KQw
// SIG // UAYDVR0fBEkwRzBFoEOgQYY/aHR0cDovL2NybC5taWNy
// SIG // b3NvZnQuY29tL3BraS9jcmwvcHJvZHVjdHMvbWljcm9z
// SIG // b2Z0cm9vdGNlcnQuY3JsMFQGCCsGAQUFBwEBBEgwRjBE
// SIG // BggrBgEFBQcwAoY4aHR0cDovL3d3dy5taWNyb3NvZnQu
// SIG // Y29tL3BraS9jZXJ0cy9NaWNyb3NvZnRSb290Q2VydC5j
// SIG // cnQwDQYJKoZIhvcNAQEFBQADggIBAFk5Pn8mRq/rb0Cx
// SIG // MrVq6w4vbqhJ9+tfde1MOy3XQ60L/svpLTGjI8x8UJiA
// SIG // IV2sPS9MuqKoVpzjcLu4tPh5tUly9z7qQX/K4QwXacul
// SIG // nCAt+gtQxFbNLeNK0rxw56gNogOlVuC4iktX8pVCnPHz
// SIG // 7+7jhh80PLhWmvBTI4UqpIIck+KUBx3y4k74jKHK6BOl
// SIG // kU7IG9KPcpUqcW2bGvgc8FPWZ8wi/1wdzaKMvSeyeWNW
// SIG // RKJRzfnpo1hW3ZsCRUQvX/TartSCMm78pJUT5Otp56mi
// SIG // LL7IKxAOZY6Z2/Wi+hImCWU4lPF6H0q70eFW6NB4lhhc
// SIG // yTUWX92THUmOLb6tNEQc7hAVGgBd3TVbIc6YxwnuhQ6M
// SIG // T20OE049fClInHLR82zKwexwo1eSV32UjaAbSANa98+j
// SIG // Zwp0pTbtLS8XyOZyNxL0b7E8Z4L5UrKNMxZlHg6K3RDe
// SIG // ZPRvzkbU0xfpecQEtNP7LN8fip6sCvsTJ0Ct5PnhqX9G
// SIG // uwdgR2VgQE6wQuxO7bN2edgKNAltHIAxH+IOVN3lofvl
// SIG // RxCtZJj/UBYufL8FIXrilUEnacOTj5XJjdibIa4NXJzw
// SIG // oq6GaIMMai27dmsAHZat8hZ79haDJLmIz2qoRzEvmtzj
// SIG // cT3XAH5iR9HOiMm4GPoOco3Boz2vAkBq/2mbluIQqBC0
// SIG // N1AI1sM9MIIGBzCCA++gAwIBAgIKYRZoNAAAAAAAHDAN
// SIG // BgkqhkiG9w0BAQUFADBfMRMwEQYKCZImiZPyLGQBGRYD
// SIG // Y29tMRkwFwYKCZImiZPyLGQBGRYJbWljcm9zb2Z0MS0w
// SIG // KwYDVQQDEyRNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0
// SIG // ZSBBdXRob3JpdHkwHhcNMDcwNDAzMTI1MzA5WhcNMjEw
// SIG // NDAzMTMwMzA5WjB3MQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSEw
// SIG // HwYDVQQDExhNaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0Ew
// SIG // ggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCf
// SIG // oWyx39tIkip8ay4Z4b3i48WZUSNQrc7dGE4kD+7Rp9FM
// SIG // rXQwIBHrB9VUlRVJlBtCkq6YXDAm2gBr6Hu97IkHD/cO
// SIG // BJjwicwfyzMkh53y9GccLPx754gd6udOo6HBI1PKjfpF
// SIG // zwnQXq/QsEIEovmmbJNn1yjcRlOwhtDlKEYuJ6yGT1VS
// SIG // DOQDLPtqkJAwbofzWTCd+n7Wl7PoIZd++NIT8wi3U21S
// SIG // tEWQn0gASkdmEScpZqiX5NMGgUqi+YSnEUcUCYKfhO1V
// SIG // eP4Bmh1QCIUAEDBG7bfeI0a7xC1Un68eeEExd8yb3zuD
// SIG // k6FhArUdDbH895uyAc4iS1T/+QXDwiALAgMBAAGjggGr
// SIG // MIIBpzAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQj
// SIG // NPjZUkZwCu1A+3b7syuwwzWzDzALBgNVHQ8EBAMCAYYw
// SIG // EAYJKwYBBAGCNxUBBAMCAQAwgZgGA1UdIwSBkDCBjYAU
// SIG // DqyCYEBWJ5flJRP8KuEKU5VZ5KShY6RhMF8xEzARBgoJ
// SIG // kiaJk/IsZAEZFgNjb20xGTAXBgoJkiaJk/IsZAEZFglt
// SIG // aWNyb3NvZnQxLTArBgNVBAMTJE1pY3Jvc29mdCBSb290
// SIG // IENlcnRpZmljYXRlIEF1dGhvcml0eYIQea0WoUqgpa1M
// SIG // c1j0BxMuZTBQBgNVHR8ESTBHMEWgQ6BBhj9odHRwOi8v
// SIG // Y3JsLm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0
// SIG // cy9taWNyb3NvZnRyb290Y2VydC5jcmwwVAYIKwYBBQUH
// SIG // AQEESDBGMEQGCCsGAQUFBzAChjhodHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY3Jvc29mdFJv
// SIG // b3RDZXJ0LmNydDATBgNVHSUEDDAKBggrBgEFBQcDCDAN
// SIG // BgkqhkiG9w0BAQUFAAOCAgEAEJeKw1wDRDbd6bStd9vO
// SIG // eVFNAbEudHFbbQwTq86+e4+4LtQSooxtYrhXAstOIBNQ
// SIG // md16QOJXu69YmhzhHQGGrLt48ovQ7DsB7uK+jwoFyI1I
// SIG // 4vBTFd1Pq5Lk541q1YDB5pTyBi+FA+mRKiQicPv2/OR4
// SIG // mS4N9wficLwYTp2OawpylbihOZxnLcVRDupiXD8WmIsg
// SIG // P+IHGjL5zDFKdjE9K3ILyOpwPf+FChPfwgphjvDXuBfr
// SIG // Tot/xTUrXqO/67x9C0J71FNyIe4wyrt4ZVxbARcKFA7S
// SIG // 2hSY9Ty5ZlizLS/n+YWGzFFW6J1wlGysOUzU9nm/qhh6
// SIG // YinvopspNAZ3GmLJPR5tH4LwC8csu89Ds+X57H2146So
// SIG // dDW4TsVxIxImdgs8UoxxWkZDFLyzs7BNZ8ifQv+AeSGA
// SIG // nhUwZuhCEl4ayJ4iIdBD6Svpu/RIzCzU2DKATCYqSCRf
// SIG // WupW76bemZ3KOm+9gSd0BhHudiG/m4LBJ1S2sWo9iaF2
// SIG // YbRuoROmv6pH8BJv/YoybLL+31HIjCPJZr2dHYcSZAI9
// SIG // La9Zj7jkIeW1sMpjtHhUBdRBLlCslLCleKuzoJZ1GtmS
// SIG // hxN1Ii8yqAhuoFuMJb+g74TKIdbrHk/Jmu5J4PcBZW+J
// SIG // C33Iacjmbuqnl84xKf8OxVtc2E0bodj6L54/LlUWa8kT
// SIG // o/0xggScMIIEmAIBATCBkDB5MQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSMwIQYDVQQDExpNaWNyb3NvZnQgQ29kZSBTaWdu
// SIG // aW5nIFBDQQITMwAAALARrwqL0Duf3QABAAAAsDAJBgUr
// SIG // DgMCGgUAoIG+MBkGCSqGSIb3DQEJAzEMBgorBgEEAYI3
// SIG // AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEEAYI3AgEV
// SIG // MCMGCSqGSIb3DQEJBDEWBBQu4kYs1JZENgyf76YsKRCk
// SIG // JGzuIzBeBgorBgEEAYI3AgEMMVAwTqAmgCQATQBpAGMA
// SIG // cgBvAHMAbwBmAHQAIABMAGUAYQByAG4AaQBuAGehJIAi
// SIG // aHR0cDovL3d3dy5taWNyb3NvZnQuY29tL2xlYXJuaW5n
// SIG // IDANBgkqhkiG9w0BAQEFAASCAQAeWj2o556GZ4eOELya
// SIG // UDTzDvt8khmslnoxf6hHd2FaR8QiMwqqijaEvU0fUEuJ
// SIG // gFdPhGNt+epte0HOqO4/3GJ9WlX+W1QXzPQb/uh4luQ0
// SIG // 1MuNUCZY8fv8bdbGfZ+pkygWqBew18hxtHM1aT/6UeCV
// SIG // noQb5Y7XGPpREidUnIS3jHkVSC+SmF7cSfrqdj6vIF9S
// SIG // f0avw09meHE3IJWk6dxj2zavfAbM7PYnYzx1lh6srECP
// SIG // 0Vi7P2az4OeM7H6lQ12pt11wcBay6D9T3tL4FYDfmTu9
// SIG // Lg7PlCidy1kwQ6MJTl9RT/NIg/C4ErIMUlvr5sxkOzZV
// SIG // l4qvSC025YLzOMTZoYICHzCCAhsGCSqGSIb3DQEJBjGC
// SIG // AgwwggIIAgEBMIGFMHcxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // ITAfBgNVBAMTGE1pY3Jvc29mdCBUaW1lLVN0YW1wIFBD
// SIG // QQIKYQKOQgAAAAAAHzAJBgUrDgMCGgUAoF0wGAYJKoZI
// SIG // hvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUx
// SIG // DxcNMTMwMzI3MTkxMjM2WjAjBgkqhkiG9w0BCQQxFgQU
// SIG // 962iFLgQsaZK2VK6bZSlYFbHq1wwDQYJKoZIhvcNAQEF
// SIG // BQAEggEAW0Kaerx16MEKVgcgLyRoLrAroa0Q8hXGs8HW
// SIG // rrXAO7fw2gBO2lzWFfO8Q5yqjTXvEkyxaZGS2Nl0rwkT
// SIG // owmQ+XqGG9r/p/W3rxIewrqLa6CnBeHMOQonNssfVjPS
// SIG // eoYko0prZwtoo1wR4+pGGxXBbmAc2PTGjvRp2M+FtUby
// SIG // PevpdAi/EKamU6Rg5xyEB2SfcPwWrWbUWd8mzNCKmCJc
// SIG // 2HNJztOYNna3GMuZS3b5GA31scDO8EIPYiq5jYj5/3Ea
// SIG // 5nlHFY7Ep2nTBtpiDkVZeRDAhrrcA3cgBXNpUrIpBDMA
// SIG // 4YthBOhu+ale4u9rhIiftq7blP3nE5E4dbTEQwfRmw==
// SIG // End signature block

// SIG // Begin signature block
// SIG // MIIdkQYJKoZIhvcNAQcCoIIdgjCCHX4CAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFH0Hd/ahUkW7
// SIG // vFWQB+eJhMyuzY9xoIIYUzCCBMIwggOqoAMCAQICEzMA
// SIG // AAC7tnckcUogACAAAAAAALswDQYJKoZIhvcNAQEFBQAw
// SIG // dzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEhMB8GA1UEAxMYTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgUENBMB4XDTE2MDkwNzE3
// SIG // NTg0N1oXDTE4MDkwNzE3NTg0N1owgbIxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xDDAKBgNVBAsTA0FPQzEnMCUGA1UECxMe
// SIG // bkNpcGhlciBEU0UgRVNOOjBERTgtMkRDNS0zQ0E5MSUw
// SIG // IwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2
// SIG // aWNlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC
// SIG // AQEAuPPlN/LC8UDbvDjtcJ0/Zinh7/n/48Wn0xV88fVR
// SIG // efSCv5/4y7+ByF7fLnMtyowUzOSX+g9J0JSOIUos465+
// SIG // pTutavlfKGYmGIY4EdufK4PDAyKz6WTMSujpg9HdcLZL
// SIG // B1tXBttWCoOY4InU9oZkAaYi/Qq2t3HGOZHrtJJejn2R
// SIG // aI+AxdItCUVRUstQvYCj+B/edFyI5QNmKE1jdC7hxB2D
// SIG // L8A9ZjqQKtnVcD2YesXjZ6VfFP6i53sm/SP0qmP/O7bG
// SIG // Qp+BR+0d8dE4CtnkcKVl38Bm1G9Uf1Ey3dtGkPpsuDVs
// SIG // ErJ3XhvtL7GMGheNIXgdpaNU4ZgcqzkwZhKLEwIDAQAB
// SIG // o4IBCTCCAQUwHQYDVR0OBBYEFI/cjV/uPkfBme63MuDH
// SIG // ZyR1zipLMB8GA1UdIwQYMBaAFCM0+NlSRnAK7UD7dvuz
// SIG // K7DDNbMPMFQGA1UdHwRNMEswSaBHoEWGQ2h0dHA6Ly9j
// SIG // cmwubWljcm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1Y3Rz
// SIG // L01pY3Jvc29mdFRpbWVTdGFtcFBDQS5jcmwwWAYIKwYB
// SIG // BQUHAQEETDBKMEgGCCsGAQUFBzAChjxodHRwOi8vd3d3
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY3Jvc29m
// SIG // dFRpbWVTdGFtcFBDQS5jcnQwEwYDVR0lBAwwCgYIKwYB
// SIG // BQUHAwgwDQYJKoZIhvcNAQEFBQADggEBAHDCPEND8UFb
// SIG // 8WUg9X47M7g+lRf6j2YymY/Vi041o2U9pPZcxsr0i+78
// SIG // vSe5Z8jAE625uabagH3aJzcoC2gZtOTJ6yL4DyWCvPcM
// SIG // kyMktbu9a6O8/hFaxj2imYg/lrx/Elj/jlmUDX+eXxC/
// SIG // LWaPmtaB5t5VAEYua0fdejkL2+FJwhDclYPCH5rqZ8Kc
// SIG // R3JiAVFmbUygLiprl/3PBts+CifFoa7mIzw1mEFya0Ob
// SIG // ez4WWtfRnpDjrYoIHvRCiAFoWVCZMPX530ZtiBV9IFrT
// SIG // s0V1TYUddPSEmnGzcXdKFG6EWB5pasBqzs+uP90g3Tnj
// SIG // ez47y8BZk4bqFyLMa40A/DgwggYAMIID6KADAgECAhMz
// SIG // AAAAww6bp9iy3PcsAAAAAADDMA0GCSqGSIb3DQEBCwUA
// SIG // MH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5n
// SIG // dG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVN
// SIG // aWNyb3NvZnQgQ29ycG9yYXRpb24xKDAmBgNVBAMTH01p
// SIG // Y3Jvc29mdCBDb2RlIFNpZ25pbmcgUENBIDIwMTEwHhcN
// SIG // MTcwODExMjAyMDI0WhcNMTgwODExMjAyMDI0WjB0MQsw
// SIG // CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMR4wHAYDVQQDExVNaWNyb3Nv
// SIG // ZnQgQ29ycG9yYXRpb24wggEiMA0GCSqGSIb3DQEBAQUA
// SIG // A4IBDwAwggEKAoIBAQC7V9c40bEGf0ktqW2zY596urY6
// SIG // IVu0mK6N1KSBoMV1xSzvgkAqt4FTd/NjAQq8zjeEA0BD
// SIG // V4JLzu0ftv2AbcnCkV0Fx9xWWQDhDOtX3v3xuJAnv3VK
// SIG // /HWycli2xUibM2IF0ZWUpb85Iq2NEk1GYtoyGc6qIlxW
// SIG // SLFvRclndmJdMIijLyjFH1Aq2YbbGhElgcL09Wcu53kd
// SIG // 9eIcdfROzMf8578LgEcp/8/NabEMC2DrZ+aEG5tN/W1H
// SIG // OsfZwWFh8pUSoQ0HrmMh2PSZHP94VYHupXnoIIJfCtq1
// SIG // UxlUAVcNh5GNwnzxVIaA4WLbgnM+Jl7wQBLSOdUmAw2F
// SIG // iDFfCguLAgMBAAGjggF/MIIBezAfBgNVHSUEGDAWBgor
// SIG // BgEEAYI3TAgBBggrBgEFBQcDAzAdBgNVHQ4EFgQUpxNd
// SIG // HyGJVegD7p4XNuryVIg1Ga8wUQYDVR0RBEowSKRGMEQx
// SIG // DDAKBgNVBAsTA0FPQzE0MDIGA1UEBRMrMjMwMDEyK2M4
// SIG // MDRiNWVhLTQ5YjQtNDIzOC04MzYyLWQ4NTFmYTIyNTRm
// SIG // YzAfBgNVHSMEGDAWgBRIbmTlUAXTgqoXNzcitW2oynUC
// SIG // lTBUBgNVHR8ETTBLMEmgR6BFhkNodHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpb3BzL2NybC9NaWNDb2RTaWdQ
// SIG // Q0EyMDExXzIwMTEtMDctMDguY3JsMGEGCCsGAQUFBwEB
// SIG // BFUwUzBRBggrBgEFBQcwAoZFaHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tL3BraW9wcy9jZXJ0cy9NaWNDb2RTaWdQ
// SIG // Q0EyMDExXzIwMTEtMDctMDguY3J0MAwGA1UdEwEB/wQC
// SIG // MAAwDQYJKoZIhvcNAQELBQADggIBAE2XTzR+8XCTnOPV
// SIG // GkucEX5rJsSlJPTfRNQkurNqCImZmssx53Cb/xQdsAc5
// SIG // f+QwOxMi3g7IlWe7bn74fJWkkII3k6aD00kCwaytWe+R
// SIG // t6dmAA6iTCXU3OddBwLKKDRlOzmDrZUqjsqg6Ag6HP4+
// SIG // e0BJlE2OVCUK5bHHCu5xN8abXjb1p0JE+7yHsA3ANdkm
// SIG // h1//Z+8odPeKMAQRimfMSzVgaiHnw40Hg16bq51xHykm
// SIG // CRHU9YLT0jYHKa7okm2QfwDJqFvu0ARl+6EOV1PM8piJ
// SIG // 858Vk8gGxGNSYQJPV0gc9ft1Esq1+fTCaV+7oZ0NaYMn
// SIG // 64M+HWsxw+4O8cSEQ4fuMZwGADJ8tyCKuQgj6lawGNSy
// SIG // vRXsN+1k02sVAiPGijOHOtGbtsCWWSygAVOEAV/ye8F6
// SIG // sOzU2FL2X3WBRFkWOCdTu1DzXnHf99dR3DHVGmM1Kpd+
// SIG // n2Y3X89VM++yyrwsI6pEHu77Z0i06ELDD4pRWKJGAmEm
// SIG // Whm/XJTpqEBw51swTHyA1FBnoqXuDus9tfHleR7h9VgZ
// SIG // b7uJbXjiIFgl/+RIs+av8bJABBdGUNQMbJEUfe7K4vYm
// SIG // 3hs7BGdRLg+kF/dC/z+RiTH4p7yz5TpS3Cozf0pkkWXY
// SIG // ZRG222q3tGxS/L+LcRbELM5zmqDpXQjBRUWlKYbsATFt
// SIG // XnTGVjELMIIGBzCCA++gAwIBAgIKYRZoNAAAAAAAHDAN
// SIG // BgkqhkiG9w0BAQUFADBfMRMwEQYKCZImiZPyLGQBGRYD
// SIG // Y29tMRkwFwYKCZImiZPyLGQBGRYJbWljcm9zb2Z0MS0w
// SIG // KwYDVQQDEyRNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0
// SIG // ZSBBdXRob3JpdHkwHhcNMDcwNDAzMTI1MzA5WhcNMjEw
// SIG // NDAzMTMwMzA5WjB3MQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSEw
// SIG // HwYDVQQDExhNaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0Ew
// SIG // ggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCf
// SIG // oWyx39tIkip8ay4Z4b3i48WZUSNQrc7dGE4kD+7Rp9FM
// SIG // rXQwIBHrB9VUlRVJlBtCkq6YXDAm2gBr6Hu97IkHD/cO
// SIG // BJjwicwfyzMkh53y9GccLPx754gd6udOo6HBI1PKjfpF
// SIG // zwnQXq/QsEIEovmmbJNn1yjcRlOwhtDlKEYuJ6yGT1VS
// SIG // DOQDLPtqkJAwbofzWTCd+n7Wl7PoIZd++NIT8wi3U21S
// SIG // tEWQn0gASkdmEScpZqiX5NMGgUqi+YSnEUcUCYKfhO1V
// SIG // eP4Bmh1QCIUAEDBG7bfeI0a7xC1Un68eeEExd8yb3zuD
// SIG // k6FhArUdDbH895uyAc4iS1T/+QXDwiALAgMBAAGjggGr
// SIG // MIIBpzAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQj
// SIG // NPjZUkZwCu1A+3b7syuwwzWzDzALBgNVHQ8EBAMCAYYw
// SIG // EAYJKwYBBAGCNxUBBAMCAQAwgZgGA1UdIwSBkDCBjYAU
// SIG // DqyCYEBWJ5flJRP8KuEKU5VZ5KShY6RhMF8xEzARBgoJ
// SIG // kiaJk/IsZAEZFgNjb20xGTAXBgoJkiaJk/IsZAEZFglt
// SIG // aWNyb3NvZnQxLTArBgNVBAMTJE1pY3Jvc29mdCBSb290
// SIG // IENlcnRpZmljYXRlIEF1dGhvcml0eYIQea0WoUqgpa1M
// SIG // c1j0BxMuZTBQBgNVHR8ESTBHMEWgQ6BBhj9odHRwOi8v
// SIG // Y3JsLm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0
// SIG // cy9taWNyb3NvZnRyb290Y2VydC5jcmwwVAYIKwYBBQUH
// SIG // AQEESDBGMEQGCCsGAQUFBzAChjhodHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY3Jvc29mdFJv
// SIG // b3RDZXJ0LmNydDATBgNVHSUEDDAKBggrBgEFBQcDCDAN
// SIG // BgkqhkiG9w0BAQUFAAOCAgEAEJeKw1wDRDbd6bStd9vO
// SIG // eVFNAbEudHFbbQwTq86+e4+4LtQSooxtYrhXAstOIBNQ
// SIG // md16QOJXu69YmhzhHQGGrLt48ovQ7DsB7uK+jwoFyI1I
// SIG // 4vBTFd1Pq5Lk541q1YDB5pTyBi+FA+mRKiQicPv2/OR4
// SIG // mS4N9wficLwYTp2OawpylbihOZxnLcVRDupiXD8WmIsg
// SIG // P+IHGjL5zDFKdjE9K3ILyOpwPf+FChPfwgphjvDXuBfr
// SIG // Tot/xTUrXqO/67x9C0J71FNyIe4wyrt4ZVxbARcKFA7S
// SIG // 2hSY9Ty5ZlizLS/n+YWGzFFW6J1wlGysOUzU9nm/qhh6
// SIG // YinvopspNAZ3GmLJPR5tH4LwC8csu89Ds+X57H2146So
// SIG // dDW4TsVxIxImdgs8UoxxWkZDFLyzs7BNZ8ifQv+AeSGA
// SIG // nhUwZuhCEl4ayJ4iIdBD6Svpu/RIzCzU2DKATCYqSCRf
// SIG // WupW76bemZ3KOm+9gSd0BhHudiG/m4LBJ1S2sWo9iaF2
// SIG // YbRuoROmv6pH8BJv/YoybLL+31HIjCPJZr2dHYcSZAI9
// SIG // La9Zj7jkIeW1sMpjtHhUBdRBLlCslLCleKuzoJZ1GtmS
// SIG // hxN1Ii8yqAhuoFuMJb+g74TKIdbrHk/Jmu5J4PcBZW+J
// SIG // C33Iacjmbuqnl84xKf8OxVtc2E0bodj6L54/LlUWa8kT
// SIG // o/0wggd6MIIFYqADAgECAgphDpDSAAAAAAADMA0GCSqG
// SIG // SIb3DQEBCwUAMIGIMQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMTIw
// SIG // MAYDVQQDEylNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0
// SIG // ZSBBdXRob3JpdHkgMjAxMTAeFw0xMTA3MDgyMDU5MDla
// SIG // Fw0yNjA3MDgyMTA5MDlaMH4xCzAJBgNVBAYTAlVTMRMw
// SIG // EQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xKDAmBgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25p
// SIG // bmcgUENBIDIwMTEwggIiMA0GCSqGSIb3DQEBAQUAA4IC
// SIG // DwAwggIKAoICAQCr8PpyEBwurdhuqoIQTTS68rZYIZ9C
// SIG // Gypr6VpQqrgGOBoESbp/wwwe3TdrxhLYC/A4wpkGsMg5
// SIG // 1QEUMULTiQ15ZId+lGAkbK+eSZzpaF7S35tTsgosw6/Z
// SIG // qSuuegmv15ZZymAaBelmdugyUiYSL+erCFDPs0S3XdjE
// SIG // LgN1q2jzy23zOlyhFvRGuuA4ZKxuZDV4pqBjDy3TQJP4
// SIG // 494HDdVceaVJKecNvqATd76UPe/74ytaEB9NViiienLg
// SIG // Ejq3SV7Y7e1DkYPZe7J7hhvZPrGMXeiJT4Qa8qEvWeSQ
// SIG // Oy2uM1jFtz7+MtOzAz2xsq+SOH7SnYAs9U5WkSE1JcM5
// SIG // bmR/U7qcD60ZI4TL9LoDho33X/DQUr+MlIe8wCF0JV8Y
// SIG // KLbMJyg4JZg5SjbPfLGSrhwjp6lm7GEfauEoSZ1fiOIl
// SIG // XdMhSz5SxLVXPyQD8NF6Wy/VI+NwXQ9RRnez+ADhvKwC
// SIG // gl/bwBWzvRvUVUvnOaEP6SNJvBi4RHxF5MHDcnrgcuck
// SIG // 379GmcXvwhxX24ON7E1JMKerjt/sW5+v/N2wZuLBl4F7
// SIG // 7dbtS+dJKacTKKanfWeA5opieF+yL4TXV5xcv3coKPHt
// SIG // bcMojyyPQDdPweGFRInECUzF1KVDL3SV9274eCBYLBNd
// SIG // YJWaPk8zhNqwiBfenk70lrC8RqBsmNLg1oiMCwIDAQAB
// SIG // o4IB7TCCAekwEAYJKwYBBAGCNxUBBAMCAQAwHQYDVR0O
// SIG // BBYEFEhuZOVQBdOCqhc3NyK1bajKdQKVMBkGCSsGAQQB
// SIG // gjcUAgQMHgoAUwB1AGIAQwBBMAsGA1UdDwQEAwIBhjAP
// SIG // BgNVHRMBAf8EBTADAQH/MB8GA1UdIwQYMBaAFHItOgIx
// SIG // kEO5FAVO4eqnxzHRI4k0MFoGA1UdHwRTMFEwT6BNoEuG
// SIG // SWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3Js
// SIG // L3Byb2R1Y3RzL01pY1Jvb0NlckF1dDIwMTFfMjAxMV8w
// SIG // M18yMi5jcmwwXgYIKwYBBQUHAQEEUjBQME4GCCsGAQUF
// SIG // BzAChkJodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtp
// SIG // L2NlcnRzL01pY1Jvb0NlckF1dDIwMTFfMjAxMV8wM18y
// SIG // Mi5jcnQwgZ8GA1UdIASBlzCBlDCBkQYJKwYBBAGCNy4D
// SIG // MIGDMD8GCCsGAQUFBwIBFjNodHRwOi8vd3d3Lm1pY3Jv
// SIG // c29mdC5jb20vcGtpb3BzL2RvY3MvcHJpbWFyeWNwcy5o
// SIG // dG0wQAYIKwYBBQUHAgIwNB4yIB0ATABlAGcAYQBsAF8A
// SIG // cABvAGwAaQBjAHkAXwBzAHQAYQB0AGUAbQBlAG4AdAAu
// SIG // IB0wDQYJKoZIhvcNAQELBQADggIBAGfyhqWY4FR5Gi7T
// SIG // 2HRnIpsLlhHhY5KZQpZ90nkMkMFlXy4sPvjDctFtg/6+
// SIG // P+gKyju/R6mj82nbY78iNaWXXWWEkH2LRlBV2AySfNIa
// SIG // SxzzPEKLUtCw/WvjPgcuKZvmPRul1LUdd5Q54ulkyUQ9
// SIG // eHoj8xN9ppB0g430yyYCRirCihC7pKkFDJvtaPpoLpWg
// SIG // Kj8qa1hJYx8JaW5amJbkg/TAj/NGK978O9C9Ne9uJa7l
// SIG // ryft0N3zDq+ZKJeYTQ49C/IIidYfwzIY4vDFLc5bnrRJ
// SIG // OQrGCsLGra7lstnbFYhRRVg4MnEnGn+x9Cf43iw6IGmY
// SIG // slmJaG5vp7d0w0AFBqYBKig+gj8TTWYLwLNN9eGPfxxv
// SIG // FX1Fp3blQCplo8NdUmKGwx1jNpeG39rz+PIWoZon4c2l
// SIG // l9DuXWNB41sHnIc+BncG0QaxdR8UvmFhtfDcxhsEvt9B
// SIG // xw4o7t5lL+yX9qFcltgA1qFGvVnzl6UJS0gQmYAf0AAp
// SIG // xbGbpT9Fdx41xtKiop96eiL6SJUfq/tHI4D1nvi/a7dL
// SIG // l+LrdXga7Oo3mXkYS//WsyNodeav+vyL6wuA6mk7r/ww
// SIG // 7QRMjt/fdW1jkT3RnVZOT7+AVyKheBEyIXrvQQqxP/uo
// SIG // zKRdwaGIm1dxVk5IRcBCyZt2WwqASGv9eZ/BvW1taslS
// SIG // cxMNelDNMYIEqjCCBKYCAQEwgZUwfjELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEoMCYGA1UEAxMfTWljcm9zb2Z0IENvZGUg
// SIG // U2lnbmluZyBQQ0EgMjAxMQITMwAAAMMOm6fYstz3LAAA
// SIG // AAAAwzAJBgUrDgMCGgUAoIG+MBkGCSqGSIb3DQEJAzEM
// SIG // BgorBgEEAYI3AgEEMBwGCisGAQQBgjcCAQsxDjAMBgor
// SIG // BgEEAYI3AgEVMCMGCSqGSIb3DQEJBDEWBBQIclN8wI4t
// SIG // JPrjNpXYal7ZYD6h+TBeBgorBgEEAYI3AgEMMVAwTqAm
// SIG // gCQATQBpAGMAcgBvAHMAbwBmAHQAIABMAGUAYQByAG4A
// SIG // aQBuAGehJIAiaHR0cHM6Ly93d3cubWljcm9zb2Z0LmNv
// SIG // bS5sZWFybmluZzANBgkqhkiG9w0BAQEFAASCAQBjD/Lr
// SIG // 81nC4k+pGadxLtrmQKwybcTUvdEmEN319qsQk8et7Cqh
// SIG // V++ROsfDx9xXXbUbOB+cBSvYAMlmTbspTmh3VBWIKAcm
// SIG // 29Hi3gmR197KQpTP1psDP7WiSBkVK84lppYstRj7u9kD
// SIG // hdlbVrOIPS/M4vKcba7ZJHiQnXm/dIwXdik5JqIBb+rQ
// SIG // SUmWmTD9zA7K5emcoUqnILN33oPdxRTxPdRbeMKMQSNZ
// SIG // VGowWQDsV4qlL4ZfUbsdLyntGkdCHEk9cmRuj8ujRSup
// SIG // M3lGMKGbyljMgu/T7ADY4Nz2KQ7HVJ0rcIz0WjIkIq0I
// SIG // rN/IzT6kmFvQ3SqAm+M5JA1eWo5aoYICKDCCAiQGCSqG
// SIG // SIb3DQEJBjGCAhUwggIRAgEBMIGOMHcxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xITAfBgNVBAMTGE1pY3Jvc29mdCBUaW1l
// SIG // LVN0YW1wIFBDQQITMwAAALu2dyRxSiAAIAAAAAAAuzAJ
// SIG // BgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3
// SIG // DQEHATAcBgkqhkiG9w0BCQUxDxcNMTcxMjI2MDgwNjQ4
// SIG // WjAjBgkqhkiG9w0BCQQxFgQUbwQEbQ7xN8BSJQJjEbti
// SIG // pW1rujQwDQYJKoZIhvcNAQEFBQAEggEAd5tCbTvZZhDl
// SIG // NLt42nLNJfusvMCBdF2xF3eiP1vVEwFnp4oUEaz6fHGR
// SIG // diMDHCDhRSwkkGTuFu/HjeQ6wZ2uZ8UdkTezzz2kaPBH
// SIG // gqfA0xafqmIzWRjWRjPXN5uhmJd0akWmyO6iVOoUixMc
// SIG // yeW5Alsn3fIp6HamqpmJITj/YMu6i9HFRyM5I3pxyn2l
// SIG // JD76QQ4HQDk9CDHKAuBpUmjq0e8+0JNqfl9qYk7crhaM
// SIG // AfuZKgu/GpFVgqSAgE9CDTpurBldNx0o2BD6FrgJz951
// SIG // g4nhCTsK931Oo5JQGke9liNWeJHj4uBhoMH2dMM1v4qj
// SIG // 7BjIEahQuvjg5AhAciZukA==
// SIG // End signature block
