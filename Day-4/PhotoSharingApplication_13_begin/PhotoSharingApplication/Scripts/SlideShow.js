﻿var percentIncrement;
var percentCurrent = 100;

function slideSwitch() {
    percentCurrent += percentIncrement;
    if (percentCurrent > 100) {
        percentCurrent = percentIncrement;
    }

    $('#slideshow-progress-bar').progressbar({
        value: percentCurrent
    });

    var $activeCard = $('#slide-show DIV.active-card');

    if ($activeCard.length == 0) {
        $activeCard = $('#slide-show DIV.slide-show-card:last');
    }

    var $nextCard = $activeCard.next();

    if ($nextCard.length == 0) {
        $nextCard = $('#slide-show DIV.slide-show-card:first');
    }

    $activeCard.addClass('last-active-card');
    $nextCard.css({ opacity: 0.0 });
    $nextCard.addClass('active-card');

    $nextCard.animate({ opacity: 1.0 }, 1000, function () {
        $activeCard.removeClass('active-card last-active-card');
    });
}

function calculateIncrement() {
    var cardCount = $('#slide-show DIV.slide-show-card').length;
    percentIncrement = 100 / cardCount;

    $('#slideshow-progress-bar').progressbar({
        value: 100
    });

}

$(document).ready(function () {
    calculateIncrement();
    setInterval("slideSwitch()", 5000);
});

// SIG // Begin signature block
// SIG // MIIdkQYJKoZIhvcNAQcCoIIdgjCCHX4CAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFHUn+GodKIdT
// SIG // FxBZJoM43zyw4i/hoIIYUzCCBMIwggOqoAMCAQICEzMA
// SIG // AAC5vA9OV+NmZTgAAAAAALkwDQYJKoZIhvcNAQEFBQAw
// SIG // dzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEhMB8GA1UEAxMYTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgUENBMB4XDTE2MDkwNzE3
// SIG // NTg0NloXDTE4MDkwNzE3NTg0NlowgbIxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xDDAKBgNVBAsTA0FPQzEnMCUGA1UECxMe
// SIG // bkNpcGhlciBEU0UgRVNOOjZCRjYtMkQ1Mi05MkMxMSUw
// SIG // IwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2
// SIG // aWNlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC
// SIG // AQEAnVwzOjcPApOipPJOyl2unn/dFb3xEwKoB5rZQWWz
// SIG // K9ufNBwp43lKlZzKbWDn+EjwzQ4bSe0HNzwpOhieif37
// SIG // LJyvZ/90FZwJiAUiDcer1DmrECASL3+9mhj9wMdDjMdN
// SIG // Nxw3Hp4ZJ+fmCdyBDCTBjfQL6MWaTb7z9nWi4VQi4ba7
// SIG // 8jyOGW1k5opcDUHSOyhulELBHFcPYfh/3kCtxlB6YI5A
// SIG // ECIC5cXZdhlM7skQe8N6vCHC9pJ6Il8miZ7v/GSJgQFM
// SIG // /3vWNIXHh10si8Jt8g+3EyP9TSKAtzQmuCTQtJiC9+CI
// SIG // j5qcTrK2K5wvDeengd0WqlU4KT9BkwP62JFxwQIDAQAB
// SIG // o4IBCTCCAQUwHQYDVR0OBBYEFBA1/Kn0UJteWEctSs7X
// SIG // 4LcRwR35MB8GA1UdIwQYMBaAFCM0+NlSRnAK7UD7dvuz
// SIG // K7DDNbMPMFQGA1UdHwRNMEswSaBHoEWGQ2h0dHA6Ly9j
// SIG // cmwubWljcm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1Y3Rz
// SIG // L01pY3Jvc29mdFRpbWVTdGFtcFBDQS5jcmwwWAYIKwYB
// SIG // BQUHAQEETDBKMEgGCCsGAQUFBzAChjxodHRwOi8vd3d3
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY3Jvc29m
// SIG // dFRpbWVTdGFtcFBDQS5jcnQwEwYDVR0lBAwwCgYIKwYB
// SIG // BQUHAwgwDQYJKoZIhvcNAQEFBQADggEBAFGKzMCbxgHA
// SIG // gBp72FigIhh6OXnu9N269XDi5nlOPGzVmp0MlQeRfvTX
// SIG // bhggmEfg8v3OkM9AABzq3ymUTJvV1WY80dElEZK8NF4F
// SIG // BvpVGnK/m7iZPbKIkFatSUUhVcs7IzU4FFkVR4SL7z/Q
// SIG // 2BhvBK2W59G/QhuH5K5pz/itt1naM+jzNY85izudLxr1
// SIG // OlpQSFXQ4IAKFluKPGqJjGUXYJhsSj3DQFUVXeqb2c+9
// SIG // xp03jxNErnd8zlDzC6B3fg6zW297TsCYQghCLNjjL0Mm
// SIG // ewOrEv2JU7HgR+WHnzo/O/mZYkWQr4WSf0JXZnwN0SOS
// SIG // LNiCs+OZtKZl1DPbJ4ytKekwggYAMIID6KADAgECAhMz
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
// SIG // BgEEAYI3AgEVMCMGCSqGSIb3DQEJBDEWBBTEY18l02hV
// SIG // Znt/KSiw9zLPnKbuNTBeBgorBgEEAYI3AgEMMVAwTqAm
// SIG // gCQATQBpAGMAcgBvAHMAbwBmAHQAIABMAGUAYQByAG4A
// SIG // aQBuAGehJIAiaHR0cDovL3d3dy5taWNyb3NvZnQuY29t
// SIG // L2xlYXJuaW5nIDANBgkqhkiG9w0BAQEFAASCAQCGqc5r
// SIG // hBWs92Zcc3Z+t+wNq/0TAkmGKBlvyIsUBtazsWU4oKfY
// SIG // uvMZYy5pHB5w0i9klBpihQVYVWYBaHuU+2b0v9Jg8g6G
// SIG // EksXmAWUSZrLG28c0H9jm4FUDT2xR1trJBprUXQSEK6C
// SIG // zwCn7YECRrrbgegW2uOCgvw4T5Zo4Aro3H0I6PstS/vZ
// SIG // LT09mExyrI2HUl1CxE6rK5OKhZJGc+/pH1Z6oBjOfOCR
// SIG // CF38AgjJ8E2vg6mIiUsN1HA55qS/Bgvr89+nsLNgp8iw
// SIG // LgduUk77YffZ07jMj75OMeTYI4wzGh5iqv5jWXpORh8e
// SIG // G6gDoPkIT8y/66K6QJMGjZNB0YbmoYICKDCCAiQGCSqG
// SIG // SIb3DQEJBjGCAhUwggIRAgEBMIGOMHcxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xITAfBgNVBAMTGE1pY3Jvc29mdCBUaW1l
// SIG // LVN0YW1wIFBDQQITMwAAALm8D05X42ZlOAAAAAAAuTAJ
// SIG // BgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3
// SIG // DQEHATAcBgkqhkiG9w0BCQUxDxcNMTcxMjI5MDYyMzQz
// SIG // WjAjBgkqhkiG9w0BCQQxFgQUUE2t38MU+qJXJVJhJ2+u
// SIG // jXUz10wwDQYJKoZIhvcNAQEFBQAEggEAjiRPJHZIwSeb
// SIG // J59i5H1ALk3Fk2I234Ia+irnfwfv9r/U8DhlVj+NbbFd
// SIG // rXevfWC9U2t0ZU/On66e6DTVHxQ1W9qn9vh0D/N0YJzq
// SIG // zR//sLfOknHQZpzDXmzBenqo2FP5EwKPP3EWzMtXaO2b
// SIG // NGJz4Hg+Owh3It51FtDISrHdtatavDYK80TT2vAZM4NL
// SIG // 2VB0ET3w8ZGBJV/aDDJNTfkgThPnaudiVN/eP3osjwf3
// SIG // woJNPqMeGawaENxDIxWfaawyJf2xyLGiylqs5/BcoWoP
// SIG // qRB+xEUWtx/T8rZiULBNKxKuQsYQhQTnrkq1FIarqkSz
// SIG // XeNLjyMKgJbFXhd/lcd9vA==
// SIG // End signature block
