{
    "title": "temp",
    "id": "f90d9b22-64a9-429d-9adb-fd5b3b33364f",
    "stigs": [
        {
            "stig_name": "Microsoft Windows 10 Security Technical Implementation Guide",
            "display_name": "Microsoft Windows 10",
            "stig_id": "MS_Windows_10_STIG",
            "release_info": "Release: 7 Benchmark Date: 07 Jun 2023",
            "uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
            "reference_identifier": "4072",
            "size": 258,
            "rules": [
                {
                    "uuid": "0a04601c-a985-412b-95f6-e7e3259d404a",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220697",
                    "rule_id": "SV-220697r857178",
                    "rule_id_src": "SV-220697r857178_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000005",
                    "group_title": "Domain-joined systems must use Windows 10 Enterprise Edition 64-bit version.",
                    "rule_title": "Domain-joined systems must use Windows 10 Enterprise Edition 64-bit version.",
                    "fix_text": "Use Windows 10 Enterprise 64-bit version for domain-joined systems.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Features such as Credential Guard use virtualization-based security to protect information that could be used in credential theft attacks if compromised. A number of system requirements must be met for Credential Guard to be configured and enabled properly. Virtualization-based security and Credential Guard are only available with Windows 10 Enterprise 64-bit version.",
                    "check_content": "Verify domain-joined systems are using Windows 10 Enterprise Edition 64-bit version.\n\nFor standalone or nondomain-joined systems, this is NA.\n\nOpen \"Settings\".\n\nSelect \"System\", then \"About\".\n\nIf \"Edition\" is not \"Windows 10 Enterprise\", this is a finding.\n\nIf \"System type\" is not \"64-bit operating system…\", this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63319",
                        "SV-77809"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220697",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "42647bc3-e9b9-48ce-9daa-0ece7be075b1",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220698",
                    "rule_id": "SV-220698r857181",
                    "rule_id_src": "SV-220698r857181_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000010",
                    "group_title": "Windows 10 domain-joined systems must have a Trusted Platform Module (TPM) enabled and ready for use.",
                    "rule_title": "Windows 10 domain-joined systems must have a Trusted Platform Module (TPM) enabled and ready for use.",
                    "fix_text": "For standalone or nondomain-joined systems, this is NA.\n\nVirtualization-based security, including Credential Guard, currently cannot be implemented in VDI due to specific supporting requirements including a TPM, UEFI with Secure Boot, and the capability to run the Hyper-V feature within the virtual desktop.\n\nFor VDIs where the virtual desktop instance is deleted or refreshed upon logoff, this is NA.\n\nEnsure domain-joined systems have a Trusted Platform Module (TPM) that is configured for use. (Versions 2.0 or 1.2 support Credential Guard.)\n\nThe TPM must be enabled in the firmware.\n\nRun \"tpm.msc\" for configuration options in Windows.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Credential Guard uses virtualization-based security to protect information that could be used in credential theft attacks if compromised. A number of system requirements must be met for Credential Guard to be configured and enabled properly. Without a TPM enabled and ready for use, Credential Guard keys are stored in a less secure method using software.",
                    "check_content": "Verify domain-joined systems have a TPM enabled and ready for use.\n\nFor standalone or nondomain-joined systems, this is NA.\n\nVirtualization-based security, including Credential Guard, currently cannot be implemented in virtual desktop implementations (VDI) due to specific supporting requirements including a TPM, UEFI with Secure Boot, and the capability to run the Hyper-V feature within the virtual desktop.\n\nFor VDIs where the virtual desktop instance is deleted or refreshed upon logoff, this is NA.\n\nVerify the system has a TPM and is ready for use.\nRun \"tpm.msc\".\nReview the sections in the center pane.\n\"Status\" must indicate it has been configured with a message such as \"The TPM is ready for use\" or \"The TPM is on and ownership has been taken\".\nTPM Manufacturer Information - Specific Version = 2.0 or 1.2\n\nIf a TPM is not found or is not ready for use, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63323",
                        "SV-77813"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220698",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "a7c02b82-e73d-4471-903c-e93bd4b4d75a",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220699",
                    "rule_id": "SV-220699r569187",
                    "rule_id_src": "SV-220699r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000015",
                    "group_title": "Windows 10 systems must have Unified Extensible Firmware Interface (UEFI) firmware and be configured to run in UEFI mode, not Legacy BIOS.",
                    "rule_title": "Windows 10 systems must have Unified Extensible Firmware Interface (UEFI) firmware and be configured to run in UEFI mode, not Legacy BIOS.",
                    "fix_text": "Configure UEFI firmware to run in UEFI mode, not Legacy BIOS mode.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "UEFI provides additional security features in comparison to legacy BIOS firmware, including Secure Boot. UEFI is required to support additional security features in Windows 10, including Virtualization Based Security and Credential Guard. Systems with UEFI that are operating in Legacy BIOS mode will not support these security features.",
                    "check_content": "For virtual desktop implementations (VDIs) where the virtual desktop instance is deleted or refreshed upon logoff, this is NA.\r\n\r\nVerify the system firmware is configured to run in UEFI mode, not Legacy BIOS.\r\n\r\nRun \"System Information\".\r\n\r\nUnder \"System Summary\", if \"BIOS Mode\" does not display \"UEFI\", this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-77083",
                        "SV-91779"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220699",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "591ba175-32f6-459d-b27b-342e9be9fb44",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220700",
                    "rule_id": "SV-220700r569187",
                    "rule_id_src": "SV-220700r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-00-000020",
                    "group_title": "Secure Boot must be enabled on Windows 10 systems.",
                    "rule_title": "Secure Boot must be enabled on Windows 10 systems.",
                    "fix_text": "Enable Secure Boot in the system firmware.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Secure Boot is a standard that ensures systems boot only to a trusted operating system. Secure Boot is required to support additional security features in Windows 10, including Virtualization Based Security and Credential Guard. If Secure Boot is turned off, these security features will not function.",
                    "check_content": "Some older systems may not have UEFI firmware. This is currently a CAT III; it will be raised in severity at a future date when broad support of Windows 10 hardware and firmware requirements are expected to be met. Devices that have UEFI firmware must have Secure Boot enabled. \n\nFor virtual desktop implementations (VDIs) where the virtual desktop instance is deleted or refreshed upon logoff, this is NA.\n\nRun \"System Information\".\n\nUnder \"System Summary\", if \"Secure Boot State\" does not display \"On\", this is finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-91781",
                        "V-77085"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220700",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "cf62c304-3a7b-438a-9fae-c9cf48596d8c",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220701",
                    "rule_id": "SV-220701r793197",
                    "rule_id_src": "SV-220701r793197_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000025",
                    "group_title": "Windows 10 must employ automated mechanisms to determine the state of system components with regard to flaw remediation using the following frequency: continuously, where ESS is used; 30 days, for any additional internal network scans not covered by ESS; and annually, for external scans by Computer Network Defense Service Provider (CNDSP).",
                    "rule_title": "Windows 10 must employ automated mechanisms to determine the state of system components with regard to flaw remediation using the following frequency: continuously, where ESS is used; 30 days, for any additional internal network scans not covered by ESS; and annually, for external scans by Computer Network Defense Service Provider (CNDSP).",
                    "fix_text": "Install DoD-approved ESS software and ensure it is operating continuously.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "An approved tool for continuous network scanning must be installed and configured to run.\r\n\r\nWithout the use of automated mechanisms to scan for security flaws on a continuous and/or periodic basis, the operating system or other system components may remain vulnerable to the exploits presented by undetected software flaws.\r\n\r\nTo support this requirement, the operating system may have an integrated solution incorporating continuous scanning using ESS and periodic scanning using other tools, as specified in the requirement.",
                    "check_content": "Verify DoD-approved ESS software is installed and properly operating. Ask the site ISSM for documentation of the ESS software installation and configuration.\r\n\r\nIf the ISSM is not able to provide a documented configuration for an installed ESS or if the ESS software is not properly maintained or used, this is a finding.\r\n\r\nNote: Example of documentation can be a copy of the site's CCB approved Software Baseline with version of software noted or a memo from the ISSM stating current ESS software and version.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77833",
                        "V-63343"
                    ],
                    "ccis": [
                        "CCI-001233"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220701",
                            "title": "SRG-OS-000191-GPOS-00080",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "8daf4f51-8aa1-4018-ba3e-08b5ef2616f4",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220702",
                    "rule_id": "SV-220702r859296",
                    "rule_id_src": "SV-220702r859296_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000030",
                    "group_title": "Windows 10 information systems must use BitLocker to encrypt all disks to protect the confidentiality and integrity of all information at rest.",
                    "rule_title": "Windows 10 information systems must use BitLocker to encrypt all disks to protect the confidentiality and integrity of all information at rest.",
                    "fix_text": "Enable full disk encryption on all information systems (including SIPRNet) using BitLocker.\n\nBitLocker, included in Windows, can be enabled in the Control Panel under \"BitLocker Drive Encryption\" as well as other management tools.\n\nNOTE: An alternate encryption application may be used in lieu of BitLocker providing it is configured for full disk encryption and satisfies the pre-boot authentication requirements (WN10-00-000031 and WN10-00-000032).",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "If data at rest is unencrypted, it is vulnerable to disclosure. Even if the operating system enforces permissions on data access, an adversary can remove non-volatile memory and read it directly, thereby circumventing operating system controls. Encrypting the data ensures that confidentiality is protected even when the operating system is not running.",
                    "check_content": "Verify all Windows 10 information systems (including SIPRNet) employ BitLocker for full disk encryption.\n\nFor virtual desktop implementations (VDIs) in which the virtual desktop instance is deleted or refreshed upon logoff, this is NA.\n\nFor Azure Virtual Desktop (AVD) implementations with no data at rest, this is NA.\n\nIf full disk encryption using BitLocker is not implemented, this is a finding.\n\nVerify BitLocker is turned on for the operating system drive and any fixed data drives.\n\nOpen \"BitLocker Drive Encryption\" from the Control Panel.\n\nIf the operating system drive or any fixed data drives have \"Turn on BitLocker\", this is a finding.\n\nNOTE: An alternate encryption application may be used in lieu of BitLocker providing it is configured for full disk encryption and satisfies the pre-boot authentication requirements (WN10-00-000031 and WN10-00-000032).",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77827",
                        "V-63337"
                    ],
                    "ccis": [
                        "CCI-001199",
                        "CCI-002475",
                        "CCI-002476"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220702",
                            "title": "SRG-OS-000185-GPOS-00079",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "b03b15f6-81e7-46fc-a96e-1ddb721211b0",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220703",
                    "rule_id": "SV-220703r859157",
                    "rule_id_src": "SV-220703r859157_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000031",
                    "group_title": "Windows 10 systems must use a BitLocker PIN for pre-boot authentication.",
                    "rule_title": "Windows 10 systems must use a BitLocker PIN for pre-boot authentication.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> BitLocker Drive Encryption >> Operating System Drives \"Require additional authentication at startup\" to \"Enabled\" with \"Configure TPM Startup PIN:\" set to \"Require startup PIN with TPM\" or with \"Configure TPM startup key and PIN:\" set to \"Require startup key and PIN with TPM\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "If data at rest is unencrypted, it is vulnerable to disclosure. Even if the operating system enforces permissions on data access, an adversary can remove non-volatile memory and read it directly, thereby circumventing operating system controls. Encrypting the data ensures that confidentiality is protected even when the operating system is not running. Pre-boot authentication prevents unauthorized users from accessing encrypted drives.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding.\n\nFor virtual desktop implementations (VDIs) in which the virtual desktop instance is deleted or refreshed upon logoff, this is NA.\n\nFor Azure Virtual Desktop (AVD) implementations with no data at rest, this is NA.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\FVE\\\n\nValue Name: UseAdvancedStartup\nType: REG_DWORD\nValue: 0x00000001 (1)\n\nIf one of the following registry values does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\FVE\\\n\nValue Name: UseTPMPIN\nType: REG_DWORD\nValue: 0x00000001 (1)\n\nValue Name: UseTPMKeyPIN\nType: REG_DWORD\nValue: 0x00000001 (1)\n\nWhen BitLocker network unlock is used:\n\nValue Name: UseTPMPIN\nType: REG_DWORD\nValue: 0x00000002 (2)\n\nValue Name: UseTPMKeyPIN\nType: REG_DWORD\nValue: 0x00000002 (2)\n\nBitLocker network unlock may be used in conjunction with a BitLocker PIN. Refer to the article at the link below for information about network unlock.\n\nhttps://docs.microsoft.com/en-us/windows/security/information-protection/bitlocker/bitlocker-how-to-enable-network-unlock",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-104689",
                        "V-94859"
                    ],
                    "ccis": [
                        "CCI-001199",
                        "CCI-002475",
                        "CCI-002476"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220703",
                            "title": "SRG-OS-000185-GPOS-00079",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "91299b31-cbec-4bf3-8414-df9141dfcfde",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220704",
                    "rule_id": "SV-220704r859297",
                    "rule_id_src": "SV-220704r859297_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000032",
                    "group_title": "Windows 10 systems must use a BitLocker PIN with a minimum length of six digits for pre-boot authentication.",
                    "rule_title": "Windows 10 systems must use a BitLocker PIN with a minimum length of six digits for pre-boot authentication.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> BitLocker Drive Encryption >> Operating System Drives \"Configure minimum PIN length for startup\" to \"Enabled\" with \"Minimum characters:\" set to \"6\" or greater.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "If data at rest is unencrypted, it is vulnerable to disclosure. Even if the operating system enforces permissions on data access, an adversary can remove non-volatile memory and read it directly, thereby circumventing operating system controls. Encrypting the data ensures that confidentiality is protected even when the operating system is not running. Pre-boot authentication prevents unauthorized users from accessing encrypted drives. Increasing the PIN length requires a greater number of guesses for an attacker.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding.\n\nFor virtual desktop implementations (VDIs) in which the virtual desktop instance is deleted or refreshed upon logoff, this is NA.\n\nFor Azure Virtual Desktop (AVD) implementations with no data at rest, this is NA.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\FVE\\\n\nValue Name: MinimumPIN\nType: REG_DWORD\nValue: 0x00000006 (6) or greater",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-104691",
                        "V-94861"
                    ],
                    "ccis": [
                        "CCI-001199",
                        "CCI-002475",
                        "CCI-002476"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220704",
                            "title": "SRG-OS-000185-GPOS-00079",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "0d3c6563-97fc-411a-8616-37e0c74bbb37",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220705",
                    "rule_id": "SV-220705r890420",
                    "rule_id_src": "SV-220705r890420_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000035",
                    "group_title": "The operating system must employ a deny-all, permit-by-exception policy to allow the execution of authorized software programs.",
                    "rule_title": "The operating system must employ a deny-all, permit-by-exception policy to allow the execution of authorized software programs.",
                    "fix_text": "Configure an application allowlisting program to employ a deny-all, permit-by-exception policy to allow the execution of authorized software programs.\n\nConfiguration of allowlisting applications will vary by the program. AppLocker is an allowlisting application built into Windows 10 Enterprise.\n\nIf AppLocker is used, it is configured through group policy in Computer Configuration >> Windows Settings >> Security Settings >> Application Control Policies >> AppLocker.\n\nImplementation guidance for AppLocker is available at the following link:\n\nhttps://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/applocker/applocker-policies-deployment-guide",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Utilizing an allowlist provides a configuration management method for allowing the execution of only authorized software. Using only authorized software decreases risk by limiting the number of potential vulnerabilities.\n\nThe organization must identify authorized software programs and only permit execution of authorized software. The process used to identify software programs that are authorized to execute on organizational information systems is commonly referred to as allowlisting.",
                    "check_content": "This is applicable to unclassified systems; for other systems, this is Not Applicable.\n\nVerify the operating system employs a deny-all, permit-by-exception policy to allow the execution of authorized software programs. This must include packaged apps such as the universal apps installed by default on systems.\n\nIf an application allowlisting program is not in use on the system, this is a finding.\n\nConfiguration of allowlisting applications will vary by the program.\n\nAppLocker is an allowlisting application built into Windows 10 Enterprise. A deny-by-default implementation is initiated by enabling any AppLocker rules within a category, only allowing what is specified by defined rules.\n\nIf AppLocker is used, perform the following to view the configuration of AppLocker:\nRun \"PowerShell\".\n\nExecute the following command, substituting [c:\\temp\\file.xml] with a location and file name appropriate for the system:\nGet-AppLockerPolicy -Effective -XML > c:\\temp\\file.xml\n\nThis will produce an xml file with the effective settings that can be viewed in a browser or opened in a program such as Excel for review.\n\nImplementation guidance for AppLocker is available at the following link:\n\nhttps://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/applocker/applocker-policies-deployment-guide",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77835",
                        "V-63345"
                    ],
                    "ccis": [
                        "CCI-001774"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220705",
                            "title": "SRG-OS-000370-GPOS-00155",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "2a3dcd18-c264-45ec-9989-582a5f274f73",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220706",
                    "rule_id": "SV-220706r857183",
                    "rule_id_src": "SV-220706r857183_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-00-000040",
                    "group_title": "Windows 10 systems must be maintained at a supported servicing level.",
                    "rule_title": "Windows 10 systems must be maintained at a supported servicing level.",
                    "fix_text": "Update systems on the Semi-Annual Channel to \"Microsoft Windows Version 20H2 (OS Build 190xx.x)\" or greater.\n\nIt is recommended systems be upgraded to the most recently released version.\n\nSpecial-purpose systems using the LTSC\\B may be at the following versions:\n\nv1507 (Build 10240)\nv1607 (Build 14393)\nv1809 (Build 17763)\nv21H2 (Build 19044)",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Windows 10 is maintained by Microsoft at servicing levels for specific periods of time to support Windows as a Service. Systems at unsupported servicing levels or releases will not receive security updates for new vulnerabilities, which leaves them subject to exploitation.\n\nNew versions with feature updates are planned to be released on a semiannual basis with an estimated support timeframe of 18 to 30 months depending on the release. Support for previously released versions has been extended for Enterprise editions.\n\nA separate servicing branch intended for special-purpose systems is the Long-Term Servicing Channel (LTSC, formerly Branch - LTSB), which will receive security updates for 10 years but excludes feature updates.",
                    "check_content": "Run \"winver.exe\".\n\nIf the \"About Windows\" dialog box does not display the following or greater, this is a finding:\n\n\"Microsoft Windows Version 20H2 (OS Build 190xx.x)\"\n\nNote: Microsoft has extended support for previous versions, providing critical and important updates for Windows 10 Enterprise.\n\nMicrosoft scheduled end-of-support dates for current Semi-Annual Channel versions:\n\nv20H2 - 9 May 2023\nv21H1 - 13 Dec 2022\nv21H2 - 11 June 2024                                               \n\nNo preview versions will be used in a production environment.\n\nSpecial-purpose systems using the Long-Term Servicing Branch\\Channel (LTSC\\B) may be at the following versions, which is not a finding:\n\nv1507 (Build 10240)\nv1607 (Build 14393)\nv1809 (Build 17763)\nv21H2 (Build 19044)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63349",
                        "SV-77839"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220706",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "b9b70538-edf6-48a7-b11c-fb83ac20dd83",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220707",
                    "rule_id": "SV-220707r793194",
                    "rule_id_src": "SV-220707r793194_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-00-000045",
                    "group_title": "The Windows 10 system must use an anti-virus program.",
                    "rule_title": "The Windows 10 system must use an anti-virus program.",
                    "fix_text": "If no anti-virus software is on the system and in use, install Windows Defender or a third-party anti-virus solution.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Malicious software can establish a base on individual desktops and servers. Employing an automated mechanism to detect this type of software will aid in elimination of the software from the operating system.",
                    "check_content": "Verify an anti-virus solution is installed on the system and in use. The anti-virus solution may be bundled with an approved Endpoint Security Solution.\r\n\r\nVerify if Windows Defender is in use or enabled:\r\n\r\nOpen \"PowerShell\".\r\n\r\nEnter “get-service | where {$_.DisplayName -Like \"*Defender*\"} | Select Status,DisplayName”\r\n\r\nVerify third-party antivirus is in use or enabled:\r\n\r\nOpen \"PowerShell\".\r\n\r\nEnter “get-service | where {$_.DisplayName -Like \"*mcafee*\"} | Select Status,DisplayName”\r\n\r\nEnter “get-service | where {$_.DisplayName -Like \"*symantec*\"} | Select Status,DisplayName”\r\n\r\nIf there is no anti-virus solution installed on the system, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77841",
                        "V-63351"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220707",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "dc943098-d572-40bf-b78b-0d37bcf97ea6",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220708",
                    "rule_id": "SV-220708r569187",
                    "rule_id_src": "SV-220708r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-00-000050",
                    "group_title": "Local volumes must be formatted using NTFS.",
                    "rule_title": "Local volumes must be formatted using NTFS.",
                    "fix_text": "Format all local volumes to use NTFS.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The ability to set access permissions and auditing is critical to maintaining the security and proper access controls of a system.  To support this, volumes must be formatted using the NTFS file system.",
                    "check_content": "Run \"Computer Management\".\nNavigate to Storage >> Disk Management.\n\nIf the \"File System\" column does not indicate \"NTFS\" for each volume assigned a drive letter, this is a finding.\n\nThis does not apply to system partitions such the Recovery and EFI System Partition.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77843",
                        "V-63353"
                    ],
                    "ccis": [
                        "CCI-000213"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220708",
                            "title": "SRG-OS-000080-GPOS-00048",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "3a395c31-ef44-4f48-826e-28527b12f54f",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220709",
                    "rule_id": "SV-220709r569187",
                    "rule_id_src": "SV-220709r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000055",
                    "group_title": "Alternate operating systems must not be permitted on the same system.",
                    "rule_title": "Alternate operating systems must not be permitted on the same system.",
                    "fix_text": "Ensure Windows 10 is the only operating system on a device.  Remove alternate operating systems.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Allowing other operating systems to run on a secure system may allow security to be circumvented.",
                    "check_content": "Verify the system does not include other operating system installations.\n\nRun \"Advanced System Settings\".\nSelect the \"Advanced\" tab.\nClick the \"Settings\" button in the \"Startup and Recovery\" section.\n\nIf the drop-down list box \"Default operating system:\" shows any operating system other than Windows 10, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77845",
                        "V-63355"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220709",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "66b3a44a-cf03-4603-8d58-5c424e43e530",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220710",
                    "rule_id": "SV-220710r569187",
                    "rule_id_src": "SV-220710r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000060",
                    "group_title": "Non system-created file shares on a system must limit access to groups that require it.",
                    "rule_title": "Non system-created file shares on a system must limit access to groups that require it.",
                    "fix_text": "If a non system-created share is required on a system, configure the share and NTFS permissions to limit access to the specific groups or accounts that require it.\n\nRemove any unnecessary non-system created shares.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Shares which provide network access, should not typically exist on a workstation except for system-created administrative shares, and could potentially expose sensitive information.  If a share is necessary, share permissions, as well as NTFS permissions, must be reconfigured to give the minimum access to those accounts that require it.",
                    "check_content": "Non system-created shares should not typically exist on workstations.\n\nIf only system-created shares exist on the system this is NA.\n\nRun \"Computer Management\".\nNavigate to System Tools >> Shared Folders >> Shares.\n\nIf the only shares listed are \"ADMIN$\", \"C$\" and \"IPC$\", this is NA.\n(Selecting Properties for system-created shares will display a message that it has been shared for administrative purposes.)\n\nRight click any non-system-created shares.\nSelect \"Properties\".\nSelect the \"Share Permissions\" tab.\n\nVerify the necessity of any shares found.\nIf the file shares have not been reconfigured to restrict permissions to the specific groups or accounts that require access, this is a finding.\n\nSelect the \"Security\" tab.\n\nIf the NTFS permissions have not been reconfigured to restrict permissions to the specific groups or accounts that require access, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77847",
                        "V-63357"
                    ],
                    "ccis": [
                        "CCI-001090"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220710",
                            "title": "SRG-OS-000138-GPOS-00069",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "341a3845-6646-4b99-a627-6cec3ab5822d",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220711",
                    "rule_id": "SV-220711r569187",
                    "rule_id_src": "SV-220711r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-00-000065",
                    "group_title": "Unused accounts must be disabled or removed from the system after 35 days of inactivity.",
                    "rule_title": "Unused accounts must be disabled or removed from the system after 35 days of inactivity.",
                    "fix_text": "Regularly review local accounts and verify their necessity.  Disable or delete any active accounts that have not been used in the last 35 days.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Outdated or unused accounts provide penetration points that may go undetected.  Inactive accounts must be deleted if no longer necessary or, if still required, disable until needed.",
                    "check_content": "Run \"PowerShell\".\nCopy the lines below to the PowerShell window and enter.\n\n\"([ADSI]('WinNT://{0}' -f $env:COMPUTERNAME)).Children | Where { $_.SchemaClassName -eq 'user' } | ForEach {\n   $user = ([ADSI]$_.Path)\n   $lastLogin = $user.Properties.LastLogin.Value\n   $enabled = ($user.Properties.UserFlags.Value -band 0x2) -ne 0x2\n   if ($lastLogin -eq $null) {\n      $lastLogin = 'Never'\n   }\n   Write-Host $user.Name $lastLogin $enabled \n}\"\n\nThis will return a list of local accounts with the account name, last logon, and if the account is enabled (True/False).\nFor example: User1  10/31/2015  5:49:56  AM  True\n\nReview the list to determine the finding validity for each account reported.\n\nExclude the following accounts:\nBuilt-in administrator account (Disabled, SID ending in 500)\nBuilt-in guest account (Disabled, SID ending in 501)\nBuilt-in DefaultAccount (Disabled, SID ending in 503)\nLocal administrator account\n\nIf any enabled accounts have not been logged on to within the past 35 days, this is a finding.\n\nInactive accounts that have been reviewed and deemed to be required must be documented with the ISSO.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63359",
                        "SV-77849"
                    ],
                    "ccis": [
                        "CCI-000795"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220711",
                            "title": "SRG-OS-000118-GPOS-00060",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "2a99a9b0-0500-4ef0-892c-b521b37a36cf",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220712",
                    "rule_id": "SV-220712r877392",
                    "rule_id_src": "SV-220712r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-00-000070",
                    "group_title": "Only accounts responsible for the administration of a system must have Administrator rights on the system.",
                    "rule_title": "Only accounts responsible for the administration of a system must have Administrator rights on the system.",
                    "fix_text": "Configure the system to include only administrator groups or accounts that are responsible for the system in the local Administrators group.\n\nFor domain-joined workstations, the Domain Admins group must be replaced by a domain workstation administrator group.\n\nRemove any standard user accounts.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "An account that does not have Administrator duties must not have Administrator rights.  Such rights would allow the account to bypass or modify required security restrictions on that machine and make it vulnerable to attack.\n\nSystem administrators must log on to systems only using accounts with the minimum level of authority necessary.\n\nFor domain-joined workstations, the Domain Admins group must be replaced by a domain workstation administrator group (see V-36434 in the Active Directory Domain STIG).  Restricting highly privileged accounts from the local Administrators group helps mitigate the risk of privilege escalation resulting from credential theft attacks.\n\nStandard user accounts must not be members of the local administrators group.",
                    "check_content": "Run \"Computer Management\".\nNavigate to System Tools >> Local Users and Groups >> Groups.\nReview the members of the Administrators group.\nOnly the appropriate administrator groups or accounts responsible for administration of the system may be members of the group.\n\nFor domain-joined workstations, the Domain Admins group must be replaced by a domain workstation administrator group.\n\nStandard user accounts must not be members of the local administrator group.\n\nIf prohibited accounts are members of the local administrators group, this is a finding.\n\nThe built-in Administrator account or other required administrative accounts would not be a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77851",
                        "V-63361"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220712",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "4f0ed878-7d48-418f-b2ae-d1c89f9e6743",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220713",
                    "rule_id": "SV-220713r569187",
                    "rule_id_src": "SV-220713r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000075",
                    "group_title": "Only accounts responsible for the backup operations must be members of the Backup Operators group.",
                    "rule_title": "Only accounts responsible for the backup operations must be members of the Backup Operators group.",
                    "fix_text": "Create separate accounts for backup operations for users with this privilege.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Backup Operators are able to read and write to any file in the system, regardless of the rights assigned to it.  Backup and restore rights permit users to circumvent the file access restrictions present on NTFS disk drives for backup and restore purposes.  Members of the Backup Operators group must have separate logon accounts for performing backup duties.",
                    "check_content": "Run \"Computer Management\".\nNavigate to System Tools >> Local Users and Groups >> Groups.\nReview the members of the Backup Operators group.\n\nIf the group contains no accounts, this is not a finding.\n\nIf the group contains any accounts, the accounts must be specifically for backup functions.\n\nIf the group contains any standard user accounts used for performing normal user tasks, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63363",
                        "SV-77853"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220713",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "1f4f8350-25f9-4be2-85e0-46952e4e4aaf",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220714",
                    "rule_id": "SV-220714r569187",
                    "rule_id_src": "SV-220714r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000080",
                    "group_title": "Only authorized user accounts must be allowed to create or run virtual machines on Windows 10 systems.",
                    "rule_title": "Only authorized user accounts must be allowed to create or run virtual machines on Windows 10 systems.",
                    "fix_text": "For Hyper-V, remove any unauthorized groups or user accounts from the \"Hyper-V Administrators\" group.\n\nFor hosted hypervisors other than Hyper-V, restrict access to create or run virtual machines to authorized user accounts only.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Allowing other operating systems to run on a secure system may allow users to circumvent security. For Hyper-V, preventing unauthorized users from being assigned to the Hyper-V Administrators group will prevent them from accessing or creating virtual machines on the system. The Hyper-V Hypervisor is used by Virtualization Based Security features such as Credential Guard on Windows 10; however, it is not the full Hyper-V installation.",
                    "check_content": "If a hosted hypervisor (Hyper-V, VMware Workstation, etc.) is installed on the system, verify only authorized user accounts are allowed to run virtual machines.\n\nFor Hyper-V, Run \"Computer Management\".\nNavigate to System Tools >> Local Users and Groups >> Groups.\nDouble click on \"Hyper-V Administrators\".\n\nIf any unauthorized groups or user accounts are listed in \"Members:\", this is a finding.\n\nFor hosted hypervisors other than Hyper-V, verify only authorized user accounts have access to run the virtual machines. Restrictions may be enforced by access to the physical system, software restriction policies, or access restrictions built in to the application.\n\nIf any unauthorized groups or user accounts have access to create or run virtual machines, this is a finding.\n\nAll users authorized to create or run virtual machines must be documented with the ISSM/ISSO. Accounts nested within group accounts must be documented as individual accounts and not the group accounts.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77855",
                        "V-63365"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220714",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "985288de-ce13-47e6-9935-b699a82cd27f",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220715",
                    "rule_id": "SV-220715r890423",
                    "rule_id_src": "SV-220715r890423_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-00-000085",
                    "group_title": "Standard local user accounts must not exist on a system in a domain.",
                    "rule_title": "Standard local user accounts must not exist on a system in a domain.",
                    "fix_text": "Limit local user accounts on domain-joined systems. Remove any unauthorized local accounts.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "To minimize potential points of attack, local user accounts, other than built-in accounts and local administrator accounts, must not exist on a workstation in a domain. Users must log on to workstations in a domain with their domain accounts.",
                    "check_content": "For standalone or nondomain-joined systems, this is Not Applicable.\n\nRun \"Computer Management\".\n\nNavigate to System Tools >> Local Users and Groups >> Users.\n\nIf local users other than the accounts listed below exist on a workstation in a domain, this is a finding.\n\nBuilt-in Administrator account (Disabled)\nBuilt-in Guest account (Disabled)\nBuilt-in DefaultAccount (Disabled)\nBuilt-in defaultuser0 (Disabled)\nBuilt-in WDAGUtilityAccount (Disabled)\nLocal administrator account(s)\n\nAll of the built-in accounts may not exist on a system, depending on the Windows 10 version.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77857",
                        "V-63367"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220715",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "6358032c-c1cb-4cb2-b30b-cda2e22144fa",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220716",
                    "rule_id": "SV-220716r569187",
                    "rule_id_src": "SV-220716r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000090",
                    "group_title": "Accounts must be configured to require password expiration.",
                    "rule_title": "Accounts must be configured to require password expiration.",
                    "fix_text": "Configure all passwords to expire.\nRun \"Computer Management\".\nNavigate to System Tools >> Local Users and Groups >> Users.\nDouble click each active account.\nEnsure \"Password never expires\" is not checked on all active accounts.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Passwords that do not expire increase exposure with a greater probability of being discovered or cracked.",
                    "check_content": "Run \"Computer Management\".\nNavigate to System Tools >> Local Users and Groups >> Users.\nDouble click each active account.\n\nIf \"Password never expires\" is selected for any account, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63371",
                        "SV-77861"
                    ],
                    "ccis": [
                        "CCI-000199"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220716",
                            "title": "SRG-OS-000076-GPOS-00044",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "744420bb-3eed-41de-bd5a-eb176da2467d",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220717",
                    "rule_id": "SV-220717r851965",
                    "rule_id_src": "SV-220717r851965_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000095",
                    "group_title": "Permissions for system files and directories must conform to minimum requirements.",
                    "rule_title": "Permissions for system files and directories must conform to minimum requirements.",
                    "fix_text": "Maintain the default file system permissions and configure the Security Option: \"Network access: Let everyone permissions apply to anonymous users\" to \"Disabled\" (WN10-SO-000160).",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Changing the system's file and directory permissions allows the possibility of unauthorized and anonymous modification to the operating system and installed applications.",
                    "check_content": "The default file system permissions are adequate when the Security Option \"Network access: Let Everyone permissions apply to anonymous users\" is set to \"Disabled\" (WN10-SO-000160).\n\nIf the default file system permissions are maintained and the referenced option is set to \"Disabled\", this is not a finding.\n\nVerify the default permissions for the sample directories below. Non-privileged groups such as Users or Authenticated Users must not have greater than Read & execute permissions except where noted as defaults. (Individual accounts must not be used to assign permissions.)\n\nViewing in File Explorer:\nSelect the \"Security\" tab, and the \"Advanced\" button.\n\nC:\\\nType - \"Allow\" for all\nInherited from - \"None\" for all\nPrincipal - Access - Applies to\nAdministrators - Full control - This folder, subfolders and files\nSYSTEM - Full control - This folder, subfolders and files\nUsers - Read & execute - This folder, subfolders and files\nAuthenticated Users - Modify - Subfolders and files only\nAuthenticated Users - Create folders / append data - This folder only\n\n\\Program Files\nType - \"Allow\" for all\nInherited from - \"None\" for all\nPrincipal - Access - Applies to\nTrustedInstaller - Full control - This folder and subfolders\nSYSTEM - Modify - This folder only\nSYSTEM - Full control - Subfolders and files only\nAdministrators - Modify - This folder only\nAdministrators - Full control - Subfolders and files only\nUsers - Read & execute - This folder, subfolders and files\nCREATOR OWNER - Full control - Subfolders and files only\nALL APPLICATION PACKAGES - Read & execute - This folder, subfolders and files\nALL RESTRICTED APPLICATION PACKAGES - Read & execute - This folder, subfolders and files\n\n\\Windows\nType - \"Allow\" for all\nInherited from - \"None\" for all\nPrincipal - Access - Applies to\nTrustedInstaller - Full control - This folder and subfolders\nSYSTEM - Modify - This folder only\nSYSTEM - Full control - Subfolders and files only\nAdministrators - Modify - This folder only\nAdministrators - Full control - Subfolders and files only\nUsers - Read & execute - This folder, subfolders and files\nCREATOR OWNER - Full control - Subfolders and files only\nALL APPLICATION PACKAGES - Read & execute - This folder, subfolders and files\nALL RESTRICTED APPLICATION PACKAGES - Read & execute - This folder, subfolders and files\n\nAlternately use icacls.\n\nRun \"CMD\" as administrator.\nEnter \"icacls\" followed by the directory.\n\nicacls c:\\\nicacls \"c:\\program files\"\nicacls c:\\windows\n\nThe following results will be displayed as each is entered:\n\nc:\\\nBUILTIN\\Administrators:(OI)(CI)(F)\nNT AUTHORITY\\SYSTEM:(OI)(CI)(F)\nBUILTIN\\Users:(OI)(CI)(RX)\nNT AUTHORITY\\Authenticated Users:(OI)(CI)(IO)(M)\nNT AUTHORITY\\Authenticated Users:(AD)\nMandatory Label\\High Mandatory Level:(OI)(NP)(IO)(NW)\nSuccessfully processed 1 files; Failed processing 0 files\n\nc:\\program files \nNT SERVICE\\TrustedInstaller:(F)\nNT SERVICE\\TrustedInstaller:(CI)(IO)(F)\nNT AUTHORITY\\SYSTEM:(M)\nNT AUTHORITY\\SYSTEM:(OI)(CI)(IO)(F)\nBUILTIN\\Administrators:(M)\nBUILTIN\\Administrators:(OI)(CI)(IO)(F)\nBUILTIN\\Users:(RX)\nBUILTIN\\Users:(OI)(CI)(IO)(GR,GE)\nCREATOR OWNER:(OI)(CI)(IO)(F)\nAPPLICATION PACKAGE AUTHORITY\\ALL APPLICATION PACKAGES:(RX)\nAPPLICATION PACKAGE AUTHORITY\\ALL APPLICATION PACKAGES:(OI)(CI)(IO)(GR,GE)\nAPPLICATION PACKAGE AUTHORITY\\ALL RESTRICTED APPLICATION PACKAGES:(RX)\nAPPLICATION PACKAGE AUTHORITY\\ALL RESTRICTED APPLICATION PACKAGES:(OI)(CI)(IO)(GR,GE)\nSuccessfully processed 1 files; Failed processing 0 files\n\nc:\\windows\nNT SERVICE\\TrustedInstaller:(F)\nNT SERVICE\\TrustedInstaller:(CI)(IO)(F)\nNT AUTHORITY\\SYSTEM:(M)\nNT AUTHORITY\\SYSTEM:(OI)(CI)(IO)(F)\nBUILTIN\\Administrators:(M)\nBUILTIN\\Administrators:(OI)(CI)(IO)(F)\nBUILTIN\\Users:(RX)\nBUILTIN\\Users:(OI)(CI)(IO)(GR,GE)\nCREATOR OWNER:(OI)(CI)(IO)(F)\nAPPLICATION PACKAGE AUTHORITY\\ALL APPLICATION PACKAGES:(RX)\nAPPLICATION PACKAGE AUTHORITY\\ALL APPLICATION PACKAGES:(OI)(CI)(IO)(GR,GE)\nAPPLICATION PACKAGE AUTHORITY\\ALL RESTRICTED APPLICATION PACKAGES:(RX)\nAPPLICATION PACKAGE AUTHORITY\\ALL RESTRICTED APPLICATION PACKAGES:(OI)(CI)(IO)(GR,GE)\nSuccessfully processed 1 files; Failed processing 0 files",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63373",
                        "SV-77863"
                    ],
                    "ccis": [
                        "CCI-002165"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220717",
                            "title": "SRG-OS-000312-GPOS-00122",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "85530188-5e2a-43ba-b39e-293d76593aed",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220718",
                    "rule_id": "SV-220718r569187",
                    "rule_id_src": "SV-220718r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-00-000100",
                    "group_title": "Internet Information System (IIS) or its subcomponents must not be installed on a workstation.",
                    "rule_title": "Internet Information System (IIS) or its subcomponents must not be installed on a workstation.",
                    "fix_text": "Uninstall \"Internet Information Services\" or \"Internet Information Services Hostable Web Core\" from the system.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Installation of Internet Information System (IIS) may allow unauthorized internet services to be hosted.  Websites must only be hosted on servers that have been designed for that purpose and can be adequately secured.",
                    "check_content": "IIS is not installed by default.  Verify it has not been installed on the system.\n\nRun \"Programs and Features\".\nSelect \"Turn Windows features on or off\".\n\nIf the entries for \"Internet Information Services\" or \"Internet Information Services Hostable Web Core\" are selected, this is a finding.\n\nIf an application requires IIS or a subset to be installed to function, this needs be documented with the ISSO.  In addition, any applicable requirements from the IIS STIG must be addressed.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63377",
                        "SV-77867"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220718",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "5e9faa9b-25db-497f-8665-c3408a401c4b",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220719",
                    "rule_id": "SV-220719r569187",
                    "rule_id_src": "SV-220719r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000105",
                    "group_title": "Simple Network Management Protocol (SNMP) must not be installed on the system.",
                    "rule_title": "Simple Network Management Protocol (SNMP) must not be installed on the system.",
                    "fix_text": "Uninstall \"Simple Network Management Protocol (SNMP)\" from the system.\n\nRun \"Programs and Features\".\nSelect \"Turn Windows Features on or off\".\nDe-select \"Simple Network Management Protocol (SNMP)\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Some protocols and services do not support required security features, such as encrypting passwords or traffic.",
                    "check_content": "\"SNMP\" is not installed by default.  Verify it has not been installed.\n\nNavigate to the Windows\\System32 directory.\n\nIf the \"SNMP\" application exists, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63381",
                        "SV-77871"
                    ],
                    "ccis": [
                        "CCI-000382"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220719",
                            "title": "SRG-OS-000096-GPOS-00050",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "a609565c-8e6b-4d20-bcec-1e79791275d0",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220720",
                    "rule_id": "SV-220720r569187",
                    "rule_id_src": "SV-220720r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000110",
                    "group_title": "Simple TCP/IP Services must not be installed on the system.",
                    "rule_title": "Simple TCP/IP Services must not be installed on the system.",
                    "fix_text": "Uninstall \"Simple TCPIP Services (i.e. echo, daytime etc)\" from the system.\n\nRun \"Programs and Features\".\nSelect \"Turn Windows Features on or off\".\nDe-select \"Simple TCPIP Services (i.e. echo, daytime etc)\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Some protocols and services do not support required security features, such as encrypting passwords or traffic.",
                    "check_content": "\"Simple TCP/IP Services\" is not installed by default.  Verify it has not been installed.\n\nRun \"Services.msc\".\n\nIf \"Simple TCP/IP Services\" is listed, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63383",
                        "SV-77873"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220720",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "a007fe0d-fd51-4fc5-a399-cb7011670d2a",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220721",
                    "rule_id": "SV-220721r569187",
                    "rule_id_src": "SV-220721r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000115",
                    "group_title": "The Telnet Client must not be installed on the system.",
                    "rule_title": "The Telnet Client must not be installed on the system.",
                    "fix_text": "Uninstall \"Telnet Client\" from the system.\n\nRun \"Programs and Features\".\nSelect \"Turn Windows Features on or off\".\n\nDe-select \"Telnet Client\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Some protocols and services do not support required security features, such as encrypting passwords or traffic.",
                    "check_content": "The \"Telnet Client\" is not installed by default.  Verify it has not been installed.\n\nNavigate to the Windows\\System32 directory.\n\nIf the \"telnet\" application exists, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77875",
                        "V-63385"
                    ],
                    "ccis": [
                        "CCI-000382"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220721",
                            "title": "SRG-OS-000096-GPOS-00050",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "fd3be9aa-f9eb-4c56-9af0-1636747c5274",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220722",
                    "rule_id": "SV-220722r569187",
                    "rule_id_src": "SV-220722r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000120",
                    "group_title": "The TFTP Client must not be installed on the system.",
                    "rule_title": "The TFTP Client must not be installed on the system.",
                    "fix_text": "Uninstall \"TFTP Client\" from the system.\n\nRun \"Programs and Features\".\nSelect \"Turn Windows Features on or off\".\n\nDe-select \"TFTP Client\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Some protocols and services do not support required security features, such as encrypting passwords or traffic.",
                    "check_content": "The \"TFTP Client\" is not installed by default.  Verify it has not been installed.\n\nNavigate to the Windows\\System32 directory.\n\nIf the \"TFTP\" application exists, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63389",
                        "SV-77879"
                    ],
                    "ccis": [
                        "CCI-000382"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220722",
                            "title": "SRG-OS-000096-GPOS-00050",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "d500d36a-7fdd-412e-9a08-86a3b1f0e9ae",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220723",
                    "rule_id": "SV-220723r569187",
                    "rule_id_src": "SV-220723r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000130",
                    "group_title": "Software certificate installation files must be removed from Windows 10.",
                    "rule_title": "Software certificate installation files must be removed from Windows 10.",
                    "fix_text": "Remove any certificate installation files (*.p12 and *.pfx) found on a system.\n\nNote: This does not apply to server-based applications that have a requirement for .p12 certificate files (e.g., Oracle Wallet Manager) or Adobe PreFlight certificate files.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Use of software certificates and their accompanying installation files for end users to access resources is less secure than the use of hardware-based certificates.",
                    "check_content": "Search all drives for *.p12 and *.pfx files.\n\nIf any files with these extensions exist, this is a finding.\n\nThis does not apply to server-based applications that have a requirement for .p12 certificate files (e.g., Oracle Wallet Manager) or Adobe PreFlight certificate files. Some applications create files with extensions of .p12 that are not certificate installation files. Removal of non-certificate installation files from systems is not required. These must be documented with the ISSO.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63393",
                        "SV-77883"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220723",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "be6d5bbd-a5ce-4fab-bf3c-42e88b925828",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220724",
                    "rule_id": "SV-220724r569187",
                    "rule_id_src": "SV-220724r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000135",
                    "group_title": "A host-based firewall must be installed and enabled on the system.",
                    "rule_title": "A host-based firewall must be installed and enabled on the system.",
                    "fix_text": "Install and enable a host-based firewall on the system.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "A firewall provides a line of defense against attack, allowing or blocking inbound and outbound connections based on a set of rules.",
                    "check_content": "Determine if a host-based firewall is installed and enabled on the system.  If a host-based firewall is not installed and enabled on the system, this is a finding.\n\nThe configuration requirements will be determined by the applicable firewall STIG.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63399",
                        "SV-77889"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220724",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "5f052ac7-22ae-43bb-8b21-a3e334806105",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220725",
                    "rule_id": "SV-220725r569187",
                    "rule_id_src": "SV-220725r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000140",
                    "group_title": "Inbound exceptions to the firewall on Windows 10 domain workstations must only allow authorized remote management hosts.",
                    "rule_title": "Inbound exceptions to the firewall on Windows 10 domain workstations must only allow authorized remote management hosts.",
                    "fix_text": "Configure firewall exceptions to inbound connections on domain workstations to include only authorized remote management hosts.\n\nConfigure only inbound connection exceptions for authorized remote management hosts.\nComputer Configuration >> Windows Settings >> Security Settings >> Windows Defender Firewall with Advanced Security >> Windows Defender Firewall with Advanced Security >> Inbound Rules (this link will be in the right pane)\n\nFor any inbound rules that allow connections, configure the Scope for Remote IP address to those of authorized remote management hosts. This may be defined as an IP address, subnet or range. Apply the rule to all firewall profiles.\n\nIf a third-party firewall is used, configure inbound exceptions to only include authorized remote management hosts.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Allowing inbound access to domain workstations from other systems may allow lateral movement across systems if credentials are compromised.  Limiting inbound connections only from authorized remote management systems will help limit this exposure.",
                    "check_content": "Verify firewall exceptions to inbound connections on domain workstations include only authorized remote management hosts.\n\nIf allowed inbound exceptions are not limited to authorized remote management hosts, this is a finding.\n\nReview inbound firewall exceptions.\nComputer Configuration >> Windows Settings >> Security Settings >> Windows Defender Firewall with Advanced Security >> Windows Defender Firewall with Advanced Security >> Inbound Rules (this link will be in the right pane)\n\nFor any inbound rules that allow connections view the Scope for Remote IP address. This may be defined as an IP address, subnet, or range. The rule must apply to all firewall profiles.\n\nIf a third-party firewall is used, ensure comparable settings are in place.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63403",
                        "SV-77893"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220725",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "43c20498-74a5-4e41-a6c1-c95c1ff48669",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220726",
                    "rule_id": "SV-220726r851966",
                    "rule_id_src": "SV-220726r851966_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-00-000145",
                    "group_title": "Data Execution Prevention (DEP) must be configured to at least OptOut.",
                    "rule_title": "Data Execution Prevention (DEP) must be configured to at least OptOut.",
                    "fix_text": "Configure DEP to at least OptOut.\n\nNote: Suspend BitLocker before making changes to the DEP configuration.\n\nOpen a command prompt (cmd.exe) or PowerShell with elevated privileges (Run as administrator).\nEnter \"BCDEDIT /set {current} nx OptOut\".  (If using PowerShell \"{current}\" must be enclosed in quotes.)\n\"AlwaysOn\", a more restrictive selection, is also valid but does not allow applications that do not function properly to be opted out of DEP.\n\nOpted out exceptions can be configured in the \"System Properties\".\n\nOpen \"System\" in Control Panel.\nSelect \"Advanced system settings\".\nClick \"Settings\" in the \"Performance\" section.\nSelect the \"Data Execution Prevention\" tab.\nApplications that are opted out are configured in the window below the selection \"Turn on DEP for all programs and services except those I select:\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Attackers are constantly looking for vulnerabilities in systems and applications. Data Execution Prevention (DEP) prevents harmful code from running in protected memory locations reserved for Windows and other programs.",
                    "check_content": "Verify the DEP configuration.\nOpen a command prompt (cmd.exe) or PowerShell with elevated privileges (Run as administrator).\nEnter \"BCDEdit /enum {current}\". (If using PowerShell \"{current}\" must be enclosed in quotes.)\nIf the value for \"nx\" is not \"OptOut\", this is a finding.\n(The more restrictive configuration of \"AlwaysOn\" would not be a finding.)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-83439",
                        "V-68845"
                    ],
                    "ccis": [
                        "CCI-002824"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220726",
                            "title": "SRG-OS-000433-GPOS-00192",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "2e278c19-1802-4209-bcdb-787e59af46dc",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220727",
                    "rule_id": "SV-220727r851967",
                    "rule_id_src": "SV-220727r851967_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-00-000150",
                    "group_title": "Structured Exception Handling Overwrite Protection (SEHOP) must be enabled.",
                    "rule_title": "Structured Exception Handling Overwrite Protection (SEHOP) must be enabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> MS Security Guide >> \"Enable Structured Exception Handling Overwrite Protection (SEHOP)\" to \"Enabled\".\n\nThis policy setting requires the installation of the SecGuide custom templates included with the STIG package. \"SecGuide.admx\" and \"SecGuide.adml\" must be copied to the \\Windows\\PolicyDefinitions and \\Windows\\PolicyDefinitions\\en-US directories respectively.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Attackers are constantly looking for vulnerabilities in systems and applications. Structured Exception Handling Overwrite Protection (SEHOP) blocks exploits that use the Structured Exception Handling overwrite technique, a common buffer overflow attack.",
                    "check_content": "This is applicable to Windows 10 prior to v1709.\n\nVerify SEHOP is turned on.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\kernel\\\n\nValue Name: DisableExceptionChainValidation\n\nValue Type: REG_DWORD\nValue: 0x00000000 (0)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-83445",
                        "V-68849"
                    ],
                    "ccis": [
                        "CCI-002824"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220727",
                            "title": "SRG-OS-000433-GPOS-00192",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "c5779288-7e87-428a-b2f7-b7890e54ffa6",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220728",
                    "rule_id": "SV-220728r569187",
                    "rule_id_src": "SV-220728r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000155",
                    "group_title": "The Windows PowerShell 2.0 feature must be disabled on the system.",
                    "rule_title": "The Windows PowerShell 2.0 feature must be disabled on the system.",
                    "fix_text": "Disable \"Windows PowerShell 2.0\" on the system.\n\nRun \"Windows PowerShell\" with elevated privileges (run as administrator).\nEnter the following:\nDisable-WindowsOptionalFeature -Online -FeatureName MicrosoftWindowsPowerShellV2Root\n\nThis command should disable both \"MicrosoftWindowsPowerShellV2Root\" and \"MicrosoftWindowsPowerShellV2\" which correspond to \"Windows PowerShell 2.0\" and \"Windows PowerShell 2.0 Engine\" respectively in \"Turn Windows features on or off\".\n\nAlternately:\nSearch for \"Features\".\nSelect \"Turn Windows features on or off\".\nDe-select \"Windows PowerShell 2.0\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Windows PowerShell 5.0 added advanced logging features which can provide additional detail when malware has been run on a system.  Disabling the Windows PowerShell 2.0 mitigates against a downgrade attack that evades the Windows PowerShell 5.0 script block logging feature.",
                    "check_content": "Run \"Windows PowerShell\" with elevated privileges (run as administrator).\n\nEnter the following:\nGet-WindowsOptionalFeature -Online | Where FeatureName -like *PowerShellv2*\n\nIf either of the following have a \"State\" of \"Enabled\", this is a finding.\n\nFeatureName : MicrosoftWindowsPowerShellV2\nState : Enabled\nFeatureName : MicrosoftWindowsPowerShellV2Root\nState : Enabled\n\nAlternately:\nSearch for \"Features\".\n\nSelect \"Turn Windows features on or off\".\n\nIf \"Windows PowerShell 2.0\" (whether the subcategory of \"Windows PowerShell 2.0 Engine\" is selected or not) is selected, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-70637",
                        "SV-85259"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220728",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "bc8c5c2c-1af4-4a19-af0c-a3a48aa57ef9",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220729",
                    "rule_id": "SV-220729r793187",
                    "rule_id_src": "SV-220729r793187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000160",
                    "group_title": "The Server Message Block (SMB) v1 protocol must be disabled on the system.",
                    "rule_title": "The Server Message Block (SMB) v1 protocol must be disabled on the system.",
                    "fix_text": "Disable the SMBv1 protocol.\n\nRun \"Windows PowerShell\" with elevated privileges (run as administrator).\n\nEnter the following:\nDisable-WindowsOptionalFeature -Online -FeatureName SMB1Protocol\n\nAlternately:\nSearch for \"Features\".\n\nSelect \"Turn Windows features on or off\".\n\nDe-select \"SMB 1.0/CIFS File Sharing Support\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "SMBv1 is a legacy protocol that uses the MD5 algorithm as part of SMB. MD5 is known to be vulnerable to a number of attacks such as collision and preimage attacks as well as not being FIPS compliant.\r\n\r\nDisabling SMBv1 support may prevent access to file or print sharing resources with systems or devices that only support SMBv1. File shares and print services hosted on Windows Server 2003 are an example, however Windows Server 2003 is no longer a supported operating system. Some older Network Attached Storage (NAS) devices may only support SMBv1.",
                    "check_content": "Different methods are available to disable SMBv1 on Windows 10.  This is the preferred method, however if V-220730 and V-220731 are configured, this is NA.\r\n\r\nRun \"Windows PowerShell\" with elevated privileges (run as administrator).\r\n\r\nEnter the following:\r\nGet-WindowsOptionalFeature -Online | Where FeatureName -eq SMB1Protocol\r\n\r\nIf \"State : Enabled\" is returned, this is a finding.\r\n\r\nAlternately:\r\nSearch for \"Features\".\r\n\r\nSelect \"Turn Windows features on or off\".\r\n\r\nIf \"SMB 1.0/CIFS File Sharing Support\" is selected, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-70639",
                        "SV-85261"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220729",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "36d84845-dc68-4acf-9f80-857f8e615e4f",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220730",
                    "rule_id": "SV-220730r793189",
                    "rule_id_src": "SV-220730r793189_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000165",
                    "group_title": "The Server Message Block (SMB) v1 protocol must be disabled on the SMB server.",
                    "rule_title": "The Server Message Block (SMB) v1 protocol must be disabled on the SMB server.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> MS Security Guide >> \"Configure SMBv1 Server\" to \"Disabled\".\n\nThis policy setting requires the installation of the SecGuide custom templates included with the STIG package. \"SecGuide.admx\" and \"SecGuide.adml\" must be copied to the \\Windows\\PolicyDefinitions and \\Windows\\PolicyDefinitions\\en-US directories respectively.   \n\nThe system must be restarted for the change to take effect.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "SMBv1 is a legacy protocol that uses the MD5 algorithm as part of SMB. MD5 is known to be vulnerable to a number of attacks such as collision and preimage attacks as well as not being FIPS compliant.\r\n\r\nDisabling SMBv1 support may prevent access to file or print sharing resources with systems or devices that only support SMBv1. File shares and print services hosted on Windows Server 2003 are an example, however Windows Server 2003 is no longer a supported operating system. Some older network attached devices may only support SMBv1.",
                    "check_content": "Different methods are available to disable SMBv1 on Windows 10, if V-220729 is configured, this is NA.\r\n\r\nIf the following registry value does not exist or is not configured as specified, this is a finding:\r\n\r\nRegistry Hive: HKEY_LOCAL_MACHINE\r\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Services\\LanmanServer\\Parameters\\\r\n\r\nValue Name: SMB1\r\n\r\nType: REG_DWORD\r\nValue: 0x00000000 (0)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-74723",
                        "SV-89397"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220730",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "4f7ea840-dde8-46fe-a33e-cfffe7f3699a",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220731",
                    "rule_id": "SV-220731r793191",
                    "rule_id_src": "SV-220731r793191_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000170",
                    "group_title": "The Server Message Block (SMB) v1 protocol must be disabled on the SMB client.",
                    "rule_title": "The Server Message Block (SMB) v1 protocol must be disabled on the SMB client.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> MS Security Guide >> \"Configure SMBv1 client driver\" to \"Enabled\" with \"Disable driver (recommended)\" selected for \"Configure MrxSmb10 driver\".\n\nThis policy setting requires the installation of the SecGuide custom templates included with the STIG package. \"SecGuide.admx\" and \"SecGuide.adml\" must be copied to the \\Windows\\PolicyDefinitions and \\Windows\\PolicyDefinitions\\en-US directories respectively.   \n\nThe system must be restarted for the changes to take effect. ",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "SMBv1 is a legacy protocol that uses the MD5 algorithm as part of SMB. MD5 is known to be vulnerable to a number of attacks such as collision and preimage attacks as well as not being FIPS compliant.\r\n\r\nDisabling SMBv1 support may prevent access to file or print sharing resources with systems or devices that only support SMBv1. File shares and print services hosted on Windows Server 2003 are an example, however Windows Server 2003 is no longer a supported operating system. Some older network attached devices may only support SMBv1.",
                    "check_content": "Different methods are available to disable SMBv1 on Windows 10, if V-220729 is configured, this is NA.\r\n\r\nIf the following registry value is not configured as specified, this is a finding:\r\n\r\nRegistry Hive: HKEY_LOCAL_MACHINE\r\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Services\\mrxsmb10\\\r\n\r\nValue Name: Start\r\n\r\nType: REG_DWORD\r\nValue: 0x00000004 (4)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-74725",
                        "SV-89399"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220731",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "4109a9d7-39de-4ac9-b0f7-620fb37cc550",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220732",
                    "rule_id": "SV-220732r569187",
                    "rule_id_src": "SV-220732r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000175",
                    "group_title": "The Secondary Logon service must be disabled on Windows 10.",
                    "rule_title": "The Secondary Logon service must be disabled on Windows 10.",
                    "fix_text": "Configure the \"Secondary Logon\" service \"Startup Type\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The Secondary Logon service provides a means for entering alternate credentials, typically used to run commands with elevated privileges.  Using privileged credentials in a standard user session can expose those credentials to theft.",
                    "check_content": "Run \"Services.msc\".\n\nLocate the \"Secondary Logon\" service.\n\nIf the \"Startup Type\" is not \"Disabled\" or the \"Status\" is \"Running\", this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-74719",
                        "SV-89393"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220732",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "d85c607f-8b69-4beb-842a-a72eae9595d7",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220733",
                    "rule_id": "SV-220733r569187",
                    "rule_id_src": "SV-220733r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000190",
                    "group_title": "Orphaned security identifiers (SIDs) must be removed from user rights on Windows 10.",
                    "rule_title": "Orphaned security identifiers (SIDs) must be removed from user rights on Windows 10.",
                    "fix_text": "Remove any unresolved SIDs found in User Rights assignments and determined to not be for currently valid accounts or groups by removing the accounts or groups from the appropriate group policy.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Accounts or groups given rights on a system may show up as unresolved SIDs for various reasons including deletion of the accounts or groups.  If the account or group objects are reanimated, there is a potential they may still have rights no longer intended.  Valid domain accounts or groups may also show up as unresolved SIDs if a connection to the domain cannot be established for some reason.",
                    "check_content": "Review the effective User Rights setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nReview each User Right listed for any unresolved SIDs to determine whether they are valid, such as due to being temporarily disconnected from the domain. (Unresolved SIDs have the format of \"*S-1-…\".)\n\nIf any unresolved SIDs exist and are not for currently valid accounts or groups, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-91201",
                        "V-76505"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220733",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "64cedb9a-47b5-4fa8-92ea-10b6dac570e2",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220734",
                    "rule_id": "SV-220734r569187",
                    "rule_id_src": "SV-220734r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000210",
                    "group_title": "Bluetooth must be turned off unless approved by the organization.",
                    "rule_title": "Bluetooth must be turned off unless approved by the organization.",
                    "fix_text": "Turn off Bluetooth radios not organizationally approved. Establish an organizational policy for the use of Bluetooth.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "If not configured properly, Bluetooth may allow rogue devices to communicate with a system. If a rogue device is paired with a system, there is potential for sensitive information to be compromised.",
                    "check_content": "This is NA if the system does not have Bluetooth.\n\nVerify the Bluetooth radio is turned off unless approved by the organization. If it is not, this is a finding.\n\nApproval must be documented with the ISSO.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-87403",
                        "V-72765"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220734",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "4d3c185f-7d2d-4098-9e69-d41de70b36f5",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220735",
                    "rule_id": "SV-220735r569187",
                    "rule_id_src": "SV-220735r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000220",
                    "group_title": "Bluetooth must be turned off when not in use.",
                    "rule_title": "Bluetooth must be turned off when not in use.",
                    "fix_text": "Turn off Bluetooth radios when not in use. Establish an organizational policy for the use of Bluetooth to include training of personnel.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "If not configured properly, Bluetooth may allow rogue devices to communicate with a system. If a rogue device is paired with a system, there is potential for sensitive information to be compromised.",
                    "check_content": "This is NA if the system does not have Bluetooth.\n\nVerify the organization has a policy to turn off Bluetooth when not in use and personnel are trained. If it does not, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-72767",
                        "SV-87405"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220735",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "0b585c4e-437e-465d-ba73-c4acf5f30776",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220736",
                    "rule_id": "SV-220736r569187",
                    "rule_id_src": "SV-220736r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000230",
                    "group_title": "The system must notify the user when a Bluetooth device attempts to connect.",
                    "rule_title": "The system must notify the user when a Bluetooth device attempts to connect.",
                    "fix_text": "Configure Bluetooth to notify users if devices attempt to connect.\nView Bluetooth Settings.\nEnsure \"Alert me when a new Bluetooth device wants to connect\" is checked.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "If not configured properly, Bluetooth may allow rogue devices to communicate with a system. If a rogue device is paired with a system, there is potential for sensitive information to be compromised",
                    "check_content": "This is NA if the system does not have Bluetooth, or if Bluetooth is turned off per the organizations policy.\n\nSearch for \"Bluetooth\".\nView Bluetooth Settings.\nSelect \"More Bluetooth Options\"\nIf \"Alert me when a new Bluetooth device wants to connect\" is not checked, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-87407",
                        "V-72769"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220736",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "dd82f4cb-bebf-45be-8440-b3c0efeb6c8b",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220737",
                    "rule_id": "SV-220737r569187",
                    "rule_id_src": "SV-220737r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-00-000240",
                    "group_title": "Administrative accounts must not be used with applications that access the Internet, such as web browsers, or with potential Internet sources, such as email.",
                    "rule_title": "Administrative accounts must not be used with applications that access the Internet, such as web browsers, or with potential Internet sources, such as email.",
                    "fix_text": "Establish and enforce a policy that prohibits administrative accounts from using applications that access the Internet, such as web browsers, or with potential Internet sources, such as email. Define specific exceptions for local service administration. These exceptions may include HTTP(S)-based tools that are used for the administration of the local system, services, or attached devices.\n\nImplement technical measures where feasible such as removal of applications or use of application whitelisting to restrict the use of applications that can access the Internet.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Using applications that access the Internet or have potential Internet sources using administrative privileges exposes a system to compromise. If a flaw in an application is exploited while running as a privileged user, the entire system could be compromised. Web browsers and email are common attack vectors for introducing malicious code and must not be run with an administrative account.\n\nSince administrative accounts may generally change or work around technical restrictions for running a web browser or other applications, it is essential that policy requires administrative accounts to not access the Internet or use applications, such as email.\n\nThe policy should define specific exceptions for local service administration. These exceptions may include HTTP(S)-based tools that are used for the administration of the local system, services, or attached devices.\n\nTechnical means such as application whitelisting can be used to enforce the policy to ensure compliance.",
                    "check_content": "Determine whether administrative accounts are prevented from using applications that access the Internet, such as web browsers, or with potential Internet sources, such as email, except as necessary for local service administration.\n\nThe organization must have a policy that prohibits administrative accounts from using applications that access the Internet, such as web browsers, or with potential Internet sources, such as email, except as necessary for local service administration. The policy should define specific exceptions for local service administration. These exceptions may include HTTP(S)-based tools that are used for the administration of the local system, services, or attached devices.\n\nTechnical measures such as the removal of applications or application whitelisting must be used where feasible to prevent the use of applications that access the Internet. \n\nIf accounts with administrative privileges are not prevented from using applications that access the Internet or with potential Internet sources, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-78129",
                        "SV-92835"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220737",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "074bc541-2b85-41d1-8b7f-20956e2c9417",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220738",
                    "rule_id": "SV-220738r890426",
                    "rule_id_src": "SV-220738r890426_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-00-000250",
                    "group_title": "Windows 10 nonpersistent VM sessions must not exceed 24 hours. ",
                    "rule_title": "Windows 10 nonpersistent VM sessions must not exceed 24 hours. ",
                    "fix_text": "Set nonpersistent VM sessions to not exceed 24 hours.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "For virtual desktop implementations (VDIs) where the virtual desktop instance is deleted or refreshed upon logoff, the organization should enforce that sessions be terminated within 24 hours. This would ensure any data stored on the VM that is not encrypted or covered by Credential Guard is deleted.",
                    "check_content": "Ensure there is a documented policy or procedure in place that nonpersistent VM sessions do not exceed 24 hours. If the system is NOT a nonpersistent VM, this is Not Applicable.\n\nIf no such documented policy or procedure is in place, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-102611",
                        "SV-111557"
                    ],
                    "ccis": [
                        "CCI-001199"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220738",
                            "title": "SRG-OS-000185-GPOS-00079",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "063b8665-b98b-4e94-a19c-96b2616a7b08",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220739",
                    "rule_id": "SV-220739r851968",
                    "rule_id_src": "SV-220739r851968_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AC-000005",
                    "group_title": "Windows 10 account lockout duration must be configured to 15 minutes or greater.",
                    "rule_title": "Windows 10 account lockout duration must be configured to 15 minutes or greater.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Account Policies >> Account Lockout Policy >> \"Account lockout duration\" to \"15\" minutes or greater.\n\nA value of \"0\" is also acceptable, requiring an administrator to unlock the account.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The account lockout feature, when enabled, prevents brute-force password attacks on the system.   This parameter specifies the amount of time that an account will remain locked after the specified number of failed logon attempts.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Account Policies >> Account Lockout Policy.\n\nIf the \"Account lockout duration\" is less than \"15\" minutes (excluding \"0\"), this is a finding.\n\nConfiguring this to \"0\", requiring an administrator to unlock the account, is more restrictive and is not a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77895",
                        "V-63405"
                    ],
                    "ccis": [
                        "CCI-002238"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220739",
                            "title": "SRG-OS-000329-GPOS-00128",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "ad2ca0d1-61b0-4561-b8da-1849e0e46ca3",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220740",
                    "rule_id": "SV-220740r569187",
                    "rule_id_src": "SV-220740r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AC-000010",
                    "group_title": "The number of allowed bad logon attempts must be configured to 3 or less.",
                    "rule_title": "The number of allowed bad logon attempts must be configured to 3 or less.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Account Policies >> Account Lockout Policy >> \"Account lockout threshold\" to \"3\" or less invalid logon attempts (excluding \"0\" which is unacceptable).",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The account lockout feature, when enabled, prevents brute-force password attacks on the system.  The higher this value is, the less effective the account lockout feature will be in protecting the local system.  The number of bad logon attempts must be reasonably small to minimize the possibility of a successful password attack, while allowing for honest errors made during a normal user logon.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Account Policies >> Account Lockout Policy.\n\nIf the \"Account lockout threshold\" is \"0\" or more than \"3\" attempts, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77899",
                        "V-63409"
                    ],
                    "ccis": [
                        "CCI-000044"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220740",
                            "title": "SRG-OS-000021-GPOS-00005",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "bd56d0bb-b25d-452f-9da7-4d7e05f66c53",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220741",
                    "rule_id": "SV-220741r851969",
                    "rule_id_src": "SV-220741r851969_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AC-000015",
                    "group_title": "The period of time before the bad logon counter is reset must be configured to 15 minutes.",
                    "rule_title": "The period of time before the bad logon counter is reset must be configured to 15 minutes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Account Policies >> Account Lockout Policy >> \"Reset account lockout counter after\" to \"15\" minutes.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The account lockout feature, when enabled, prevents brute-force password attacks on the system.  This parameter specifies the period of time that must pass after failed logon attempts before the counter is reset to 0.  The smaller this value is, the less effective the account lockout feature will be in protecting the local system.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Account Policies >> Account Lockout Policy.\n\nIf the \"Reset account lockout counter after\" value is less than \"15\" minutes, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63413",
                        "SV-77903"
                    ],
                    "ccis": [
                        "CCI-000044",
                        "CCI-002238"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220741",
                            "title": "SRG-OS-000021-GPOS-00005",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "d618ae00-8fd6-43b6-b991-40d238415a04",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220742",
                    "rule_id": "SV-220742r569187",
                    "rule_id_src": "SV-220742r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AC-000020",
                    "group_title": "The password history must be configured to 24 passwords remembered.",
                    "rule_title": "The password history must be configured to 24 passwords remembered.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Account Policies >> Password Policy >> \"Enforce password history\" to \"24\" passwords remembered.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "A system is more vulnerable to unauthorized access when system users recycle the same password several times without being required to change a password to a unique password on a regularly scheduled basis.  This enables users to effectively negate the purpose of mandating periodic password changes.  The default value is 24 for Windows domain systems.  DoD has decided this is the appropriate value for all Windows systems.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Account Policies >> Password Policy.\n\nIf the value for \"Enforce password history\" is less than \"24\" passwords remembered, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63415",
                        "SV-77905"
                    ],
                    "ccis": [
                        "CCI-000200"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220742",
                            "title": "SRG-OS-000077-GPOS-00045",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "16d704cf-4823-46b1-8dca-f5189fec1f5c",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220743",
                    "rule_id": "SV-220743r569187",
                    "rule_id_src": "SV-220743r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AC-000025",
                    "group_title": "The maximum password age must be configured to 60 days or less.",
                    "rule_title": "The maximum password age must be configured to 60 days or less.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Account Policies >> Password Policy >> \"Maximum Password Age\" to \"60\" days or less (excluding \"0\" which is unacceptable).",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The longer a password is in use, the greater the opportunity for someone to gain unauthorized knowledge of the passwords.   Scheduled changing of passwords hinders the ability of unauthorized system users to crack passwords and gain access to a system.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Account Policies >> Password Policy.\n\nIf the value for the \"Maximum password age\" is greater than \"60\" days, this is a finding.  If the value is set to \"0\" (never expires), this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63419",
                        "SV-77909"
                    ],
                    "ccis": [
                        "CCI-000199"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220743",
                            "title": "SRG-OS-000076-GPOS-00044",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "d594d3c7-9707-41b1-8584-73380df71183",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220744",
                    "rule_id": "SV-220744r569187",
                    "rule_id_src": "SV-220744r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AC-000030",
                    "group_title": "The minimum password age must be configured to at least 1 day.",
                    "rule_title": "The minimum password age must be configured to at least 1 day.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Account Policies >> Password Policy >> \"Minimum Password Age\" to at least \"1\" day.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Permitting passwords to be changed in immediate succession within the same day allows users to cycle passwords through their history database.  This enables users to effectively negate the purpose of mandating periodic password changes.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Account Policies >> Password Policy.\n\nIf the value for the \"Minimum password age\" is less than \"1\" day, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63421",
                        "SV-77911"
                    ],
                    "ccis": [
                        "CCI-000198"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220744",
                            "title": "SRG-OS-000075-GPOS-00043",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "45155cc9-9cce-4fb4-9793-d693d4b6c6d3",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220745",
                    "rule_id": "SV-220745r569187",
                    "rule_id_src": "SV-220745r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AC-000035",
                    "group_title": "Passwords must, at a minimum, be 14 characters.",
                    "rule_title": "Passwords must, at a minimum, be 14 characters.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Account Policies >> Password Policy >> \"Minimum password length\" to \"14\" characters.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Information systems not protected with strong password schemes (including passwords of minimum length) provide the opportunity for anyone to crack the password, thus gaining access to the system and compromising the device, information, or the local network.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Account Policies >> Password Policy.\n\nIf the value for the \"Minimum password length,\" is less than \"14\" characters, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77913",
                        "V-63423"
                    ],
                    "ccis": [
                        "CCI-000205"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220745",
                            "title": "SRG-OS-000078-GPOS-00046",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "5bde446d-cfba-4947-af9d-916ae186d405",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220746",
                    "rule_id": "SV-220746r569187",
                    "rule_id_src": "SV-220746r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AC-000040",
                    "group_title": "The built-in Microsoft password complexity filter must be enabled.",
                    "rule_title": "The built-in Microsoft password complexity filter must be enabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Account Policies >> Password Policy >> \"Password must meet complexity requirements\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The use of complex passwords increases their strength against guessing and brute-force attacks.  This setting configures the system to verify that newly created passwords conform to the Windows password complexity policy.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Account Policies >> Password Policy.\n\nIf the value for \"Password must meet complexity requirements\" is not set to \"Enabled\", this is a finding.\n\nIf the site is using a password filter that requires this setting be set to \"Disabled\" for the filter to be used, this would not be considered a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77917",
                        "V-63427"
                    ],
                    "ccis": [
                        "CCI-000192",
                        "CCI-000193",
                        "CCI-000194",
                        "CCI-001619"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220746",
                            "title": "SRG-OS-000069-GPOS-00037",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "0976222f-fe57-453a-b837-2246aae12ca4",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220747",
                    "rule_id": "SV-220747r877397",
                    "rule_id_src": "SV-220747r877397_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-AC-000045",
                    "group_title": "Reversible password encryption must be disabled.",
                    "rule_title": "Reversible password encryption must be disabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Account Policies >> Password Policy >> \"Store passwords using reversible encryption\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Storing passwords using reversible encryption is essentially the same as storing clear-text versions of the passwords. For this reason, this policy must never be enabled.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Account Policies >> Password Policy.\n\nIf the value for \"Store password using reversible encryption\" is not set to \"Disabled\", this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77919",
                        "V-63429"
                    ],
                    "ccis": [
                        "CCI-000196"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220747",
                            "title": "SRG-OS-000073-GPOS-00041",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "87f73026-e466-4ace-bfe6-cf9a315cca1f",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220748",
                    "rule_id": "SV-220748r569187",
                    "rule_id_src": "SV-220748r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000005",
                    "group_title": "The system must be configured to audit Account Logon - Credential Validation failures.",
                    "rule_title": "The system must be configured to audit Account Logon - Credential Validation failures.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Account Logon >> \"Audit Credential Validation\" with \"Failure\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nCredential validation records events related to validation tests on credentials for a user account logon.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following. If the system does not audit the following, this is a finding:\n\nAccount Logon >> Credential Validation - Failure",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77921",
                        "V-63431"
                    ],
                    "ccis": [
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220748",
                            "title": "SRG-OS-000470-GPOS-00214",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "fc9398c6-78bb-41c2-886b-b91b805a03ee",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220749",
                    "rule_id": "SV-220749r569187",
                    "rule_id_src": "SV-220749r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000010",
                    "group_title": "The system must be configured to audit Account Logon - Credential Validation successes.",
                    "rule_title": "The system must be configured to audit Account Logon - Credential Validation successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Account Logon >> \"Audit Credential Validation\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nCredential validation records events related to validation tests on credentials for a user account logon.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nAccount Logon >> Credential Validation - Success",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77925",
                        "V-63435"
                    ],
                    "ccis": [
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220749",
                            "title": "SRG-OS-000470-GPOS-00214",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "806c0458-6176-4baa-bca8-98199b9fa6a0",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220750",
                    "rule_id": "SV-220750r851970",
                    "rule_id_src": "SV-220750r851970_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000030",
                    "group_title": "The system must be configured to audit Account Management - Security Group Management successes.",
                    "rule_title": "The system must be configured to audit Account Management - Security Group Management successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Account Management >> \"Audit Security Group Management\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nSecurity Group Management records events such as creating, deleting or changing of security groups, including changes in group members.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nAccount Management >> Security Group Management - Success",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77935",
                        "V-63445"
                    ],
                    "ccis": [
                        "CCI-000018",
                        "CCI-000172",
                        "CCI-001403",
                        "CCI-001404",
                        "CCI-001405",
                        "CCI-002130",
                        "CCI-002234"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220750",
                            "title": "SRG-OS-000004-GPOS-00004",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "31097e06-15f3-4ac0-96df-5a77f1207880",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220751",
                    "rule_id": "SV-220751r851971",
                    "rule_id_src": "SV-220751r851971_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000035",
                    "group_title": "The system must be configured to audit Account Management - User Account Management failures.",
                    "rule_title": "The system must be configured to audit Account Management - User Account Management failures.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Account Management >> \"Audit User Account Management\" with \"Failure\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nUser Account Management records events such as creating, changing, deleting, renaming, disabling, or enabling user accounts.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nAccount Management >> User Account Management - Failure",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77937",
                        "V-63447"
                    ],
                    "ccis": [
                        "CCI-000018",
                        "CCI-000172",
                        "CCI-001403",
                        "CCI-001404",
                        "CCI-001405",
                        "CCI-002130",
                        "CCI-002234"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220751",
                            "title": "SRG-OS-000004-GPOS-00004",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "7b7593f5-ae05-4a32-a20e-74d343ecad58",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220752",
                    "rule_id": "SV-220752r851972",
                    "rule_id_src": "SV-220752r851972_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000040",
                    "group_title": "The system must be configured to audit Account Management - User Account Management successes.",
                    "rule_title": "The system must be configured to audit Account Management - User Account Management successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Account Management >> \"Audit User Account Management\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nUser Account Management records events such as creating, changing, deleting, renaming, disabling, or enabling user accounts.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nAccount Management >> User Account Management - Success",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77939",
                        "V-63449"
                    ],
                    "ccis": [
                        "CCI-000018",
                        "CCI-000172",
                        "CCI-001403",
                        "CCI-001404",
                        "CCI-001405",
                        "CCI-002130",
                        "CCI-002234"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220752",
                            "title": "SRG-OS-000004-GPOS-00004",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "7f7d59f0-8ff4-4003-acd9-523acaa68123",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220753",
                    "rule_id": "SV-220753r851973",
                    "rule_id_src": "SV-220753r851973_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000045",
                    "group_title": "The system must be configured to audit Detailed Tracking - PNP Activity successes.",
                    "rule_title": "The system must be configured to audit Detailed Tracking - PNP Activity successes.",
                    "fix_text": "Computer Configuration >> Windows Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Detailed Tracking >> \"Audit PNP Activity\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nPlug and Play activity records events related to the successful connection of external devices.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective. \n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\"\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nDetailed Tracking >> Plug and Play Events - Success",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77941",
                        "V-63451"
                    ],
                    "ccis": [
                        "CCI-000172",
                        "CCI-001814"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220753",
                            "title": "SRG-OS-000365-GPOS-00152",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "be95d179-437e-4068-a73c-f0f27e4a3b89",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220754",
                    "rule_id": "SV-220754r851974",
                    "rule_id_src": "SV-220754r851974_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000050",
                    "group_title": "The system must be configured to audit Detailed Tracking - Process Creation successes.",
                    "rule_title": "The system must be configured to audit Detailed Tracking - Process Creation successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Detailed Tracking >> \"Audit Process Creation\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nProcess creation records events related to the creation of a process and the source.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nDetailed Tracking >> Process Creation - Success",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63453",
                        "SV-77943"
                    ],
                    "ccis": [
                        "CCI-000172",
                        "CCI-001814"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220754",
                            "title": "SRG-OS-000365-GPOS-00152",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "c2d43b7e-69bf-492c-bc8d-4a1d8ef3f263",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220755",
                    "rule_id": "SV-220755r569187",
                    "rule_id_src": "SV-220755r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000054",
                    "group_title": "The system must be configured to audit Logon/Logoff - Account Lockout failures.",
                    "rule_title": "The system must be configured to audit Logon/Logoff - Account Lockout failures.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Logon/Logoff >> \"Audit Account Lockout\" with \"Failure\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAccount Lockout events can be used to identify potentially malicious logon attempts.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\n\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\n\nEnter \"AuditPol /get /category:*\"\n\nCompare the AuditPol settings with the following. If the system does not audit the following, this is a finding:\n\nLogon/Logoff >> Account Lockout - Failure",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-71759",
                        "SV-86383"
                    ],
                    "ccis": [
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220755",
                            "title": "SRG-OS-000470-GPOS-00214",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "1e95b95d-afa0-4008-9096-c56bbb07a596",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220756",
                    "rule_id": "SV-220756r569187",
                    "rule_id_src": "SV-220756r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000060",
                    "group_title": "The system must be configured to audit Logon/Logoff - Group Membership successes.",
                    "rule_title": "The system must be configured to audit Logon/Logoff - Group Membership successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Logon/Logoff >> \"Audit Group Membership\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAudit Group Membership records information related to the group membership of a user's logon token.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective. \n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\"\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nLogon/Logoff >> Group Membership - Success",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77947",
                        "V-63457"
                    ],
                    "ccis": [
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220756",
                            "title": "SRG-OS-000470-GPOS-00214",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "77dcd00f-b151-46ee-beb6-19b2d6bf809a",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220757",
                    "rule_id": "SV-220757r569187",
                    "rule_id_src": "SV-220757r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000065",
                    "group_title": "The system must be configured to audit Logon/Logoff - Logoff successes.",
                    "rule_title": "The system must be configured to audit Logon/Logoff - Logoff successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Logon/Logoff >> \"Audit Logoff\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nLogoff records user logoffs. If this is an interactive logoff, it is recorded on the local system. If it is to a network share, it is recorded on the system accessed.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nLogon/Logoff >> Logoff - Success",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63459",
                        "SV-77951"
                    ],
                    "ccis": [
                        "CCI-000067",
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220757",
                            "title": "SRG-OS-000032-GPOS-00013",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "fb8eb3fb-2722-453e-8431-b4d6fd996805",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220758",
                    "rule_id": "SV-220758r569187",
                    "rule_id_src": "SV-220758r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000070",
                    "group_title": "The system must be configured to audit Logon/Logoff - Logon failures.",
                    "rule_title": "The system must be configured to audit Logon/Logoff - Logon failures.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Logon/Logoff >> \"Audit Logon\" with \"Failure\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nLogon records user logons. If this is an interactive logon, it is recorded on the local system. If it is to a network share, it is recorded on the system accessed.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nLogon/Logoff >> Logon - Failure",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63463",
                        "SV-77953"
                    ],
                    "ccis": [
                        "CCI-000067",
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220758",
                            "title": "SRG-OS-000032-GPOS-00013",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "065d0a4f-1e63-4031-aad5-6b0f28e466b6",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220759",
                    "rule_id": "SV-220759r569187",
                    "rule_id_src": "SV-220759r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000075",
                    "group_title": "The system must be configured to audit Logon/Logoff - Logon successes.",
                    "rule_title": "The system must be configured to audit Logon/Logoff - Logon successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Logon/Logoff >> \"Audit Logon\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nLogon records user logons. If this is an interactive logon, it is recorded on the local system. If it is to a network share, it is recorded on the system accessed.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nLogon/Logoff >> Logon - Success",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63467",
                        "SV-77957"
                    ],
                    "ccis": [
                        "CCI-000067",
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220759",
                            "title": "SRG-OS-000032-GPOS-00013",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "4c5ccd24-b651-4787-b652-1942593b90e1",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220760",
                    "rule_id": "SV-220760r569187",
                    "rule_id_src": "SV-220760r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000080",
                    "group_title": "The system must be configured to audit Logon/Logoff - Special Logon successes.",
                    "rule_title": "The system must be configured to audit Logon/Logoff - Special Logon successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Logon/Logoff >> \"Audit Special Logon\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nSpecial Logon records special logons which have administrative privileges and can be used to elevate processes.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nLogon/Logoff >> Special Logon - Success",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63469",
                        "SV-77959"
                    ],
                    "ccis": [
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220760",
                            "title": "SRG-OS-000470-GPOS-00214",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "1bfa740d-b5bf-4297-aedc-4d3edd320441",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220761",
                    "rule_id": "SV-220761r569187",
                    "rule_id_src": "SV-220761r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000081",
                    "group_title": "Windows 10 must be configured to audit Object Access - File Share failures.",
                    "rule_title": "Windows 10 must be configured to audit Object Access - File Share failures.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Object Access >> \"Audit File Share\" with \"Failure\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAuditing file shares records events related to connection to shares on a system including system shares such as C$.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\n\nOpen PowerShell or a Command Prompt with elevated privileges (\"Run as Administrator\").\n\nEnter \"AuditPol /get /category:*\"\n\nCompare the AuditPol settings with the following:\n\nObject Access >> File Share - Failure\n\nIf the system does not audit the above, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-89701",
                        "V-75027"
                    ],
                    "ccis": [
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220761",
                            "title": "SRG-OS-000474-GPOS-00219",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "c408b72b-8744-48cd-8c93-fd388caea401",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220762",
                    "rule_id": "SV-220762r569187",
                    "rule_id_src": "SV-220762r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000082",
                    "group_title": "Windows 10 must be configured to audit Object Access - File Share successes.",
                    "rule_title": "Windows 10 must be configured to audit Object Access - File Share successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Object Access >> \"Audit File Share\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAuditing file shares records events related to connection to shares on a system including system shares such as C$.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\n\nOpen PowerShell or a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\"\n\nCompare the AuditPol settings with the following:\n\nObject Access >> File Share - Success\n\nIf the system does not audit the above, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-74721",
                        "SV-89395"
                    ],
                    "ccis": [
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220762",
                            "title": "SRG-OS-000474-GPOS-00219",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "075d3e5a-de9e-40a7-94a6-a4916bba9904",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220763",
                    "rule_id": "SV-220763r569187",
                    "rule_id_src": "SV-220763r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000083",
                    "group_title": "Windows 10 must be configured to audit Object Access - Other Object Access Events successes.",
                    "rule_title": "Windows 10 must be configured to audit Object Access - Other Object Access Events successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Object Access >> \"Audit Other Object Access Events\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAuditing for other object access records events related to the management of task scheduler jobs and COM+ objects.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\n\nOpen PowerShell or a Command Prompt with elevated privileges (\"Run as Administrator\").\n\nEnter \"AuditPol /get /category:*\"\n\nCompare the AuditPol settings with the following:\n\nObject Access >> Other Object Access Events - Success\n\nIf the system does not audit the above, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-74411",
                        "SV-89085"
                    ],
                    "ccis": [
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220763",
                            "title": "SRG-OS-000474-GPOS-00219",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "edc78c95-bc32-4ab3-8bc4-e388df1a7762",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220764",
                    "rule_id": "SV-220764r569187",
                    "rule_id_src": "SV-220764r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000084",
                    "group_title": "Windows 10 must be configured to audit Object Access - Other Object Access Events failures.",
                    "rule_title": "Windows 10 must be configured to audit Object Access - Other Object Access Events failures.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Object Access >> \"Audit Other Object Access Events\" with \"Failure\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAuditing for other object access records events related to the management of task scheduler jobs and COM+ objects.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\n\nOpen PowerShell or a Command Prompt with elevated privileges (\"Run as Administrator\").\n\nEnter \"AuditPol /get /category:*\"\n\nCompare the AuditPol settings with the following:\n\nObject Access >> Other Object Access Events - Failure\n\nIf the system does not audit the above, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-89083",
                        "V-74409"
                    ],
                    "ccis": [
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220764",
                            "title": "SRG-OS-000474-GPOS-00219",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "75c0874f-1bb7-4c55-8d5d-ede631d6a8e4",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220765",
                    "rule_id": "SV-220765r569187",
                    "rule_id_src": "SV-220765r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000085",
                    "group_title": "The system must be configured to audit Object Access - Removable Storage failures.",
                    "rule_title": "The system must be configured to audit Object Access - Removable Storage failures.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Object Access >> \"Audit Removable Storage\" with \"Failure\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAuditing object access for removable media records events related to access attempts on file system objects on removable storage devices.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\"\n\nCompare the AuditPol settings with the following. If the system does not audit the following, this is a finding:\n\nObject Access >> Removable Storage - Failure\n\nSome virtual machines may generate excessive audit events for access to the virtual hard disk itself when this setting is enabled. This may be set to Not Configured in such cases and would not be a finding.  This must be documented with the ISSO to include mitigations such as monitoring or restricting any actual removable storage connected to the VM.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77961",
                        "V-63471"
                    ],
                    "ccis": [
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220765",
                            "title": "SRG-OS-000474-GPOS-00219",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "d70e9d7f-65e4-4119-85b6-e35ef1c13319",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220766",
                    "rule_id": "SV-220766r569187",
                    "rule_id_src": "SV-220766r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000090",
                    "group_title": "The system must be configured to audit Object Access - Removable Storage successes.",
                    "rule_title": "The system must be configured to audit Object Access - Removable Storage successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Object Access >> \"Audit Removable Storage\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAuditing object access for removable media records events related to access attempts on file system objects on removable storage devices.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\"\n\nCompare the AuditPol settings with the following. If the system does not audit the following, this is a finding:\n\nObject Access >> Removable Storage - Success\n\nSome virtual machines may generate excessive audit events for access to the virtual hard disk itself when this setting is enabled. This may be set to Not Configured in such cases and would not be a finding.  This must be documented with the ISSO to include mitigations such as monitoring or restricting any actual removable storage connected to the VM.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63473",
                        "SV-77963"
                    ],
                    "ccis": [
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220766",
                            "title": "SRG-OS-000474-GPOS-00219",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "524d4783-a949-4384-a09e-c1583c4b399e",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220767",
                    "rule_id": "SV-220767r569187",
                    "rule_id_src": "SV-220767r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000100",
                    "group_title": "The system must be configured to audit Policy Change - Audit Policy Change successes.",
                    "rule_title": "The system must be configured to audit Policy Change - Audit Policy Change successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Policy Change >> \"Audit Audit Policy Change\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAudit Policy Change records events related to changes in audit policy.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nPolicy Change >> Audit Policy Change - Success",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77969",
                        "V-63479"
                    ],
                    "ccis": [
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220767",
                            "title": "SRG-OS-000471-GPOS-00215",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "9f086777-da69-4a04-a433-cccf3e86866e",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220768",
                    "rule_id": "SV-220768r851975",
                    "rule_id_src": "SV-220768r851975_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000105",
                    "group_title": "The system must be configured to audit Policy Change - Authentication Policy Change successes.",
                    "rule_title": "The system must be configured to audit Policy Change - Authentication Policy Change successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Policy Change >> \"Audit Authentication Policy Change\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAuthentication Policy Change records events related to changes in authentication policy including Kerberos policy and Trust changes.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nPolicy Change >> Authentication Policy Change - Success",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63481",
                        "SV-77971"
                    ],
                    "ccis": [
                        "CCI-000172",
                        "CCI-002234"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220768",
                            "title": "SRG-OS-000327-GPOS-00127",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "d4429e76-2c10-4915-93d6-5cb0b937026e",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220769",
                    "rule_id": "SV-220769r569187",
                    "rule_id_src": "SV-220769r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000107",
                    "group_title": "The system must be configured to audit Policy Change - Authorization Policy Change successes.",
                    "rule_title": "The system must be configured to audit Policy Change - Authorization Policy Change successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Policy Change >> \"Audit Authorization Policy Change\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAuthorization Policy Change records events related to changes in user rights, such as Create a token object.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective. \n\nUse the AuditPol tool to review the current Audit Policy configuration:\n-Open a Command Prompt with elevated privileges (\"Run as Administrator\").\n-Enter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following. If the system does not audit the following, this is a finding.\n\nPolicy Change >> Authorization Policy Change - Success",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-86385",
                        "V-71761"
                    ],
                    "ccis": [
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220769",
                            "title": "SRG-OS-000471-GPOS-00215",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "810924f4-8489-454e-a83e-4b7278613c71",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220770",
                    "rule_id": "SV-220770r851976",
                    "rule_id_src": "SV-220770r851976_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000110",
                    "group_title": "The system must be configured to audit Privilege Use - Sensitive Privilege Use failures.",
                    "rule_title": "The system must be configured to audit Privilege Use - Sensitive Privilege Use failures.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Privilege Use >> \"Audit Sensitive Privilege Use\" with \"Failure\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nSensitive Privilege Use records events related to use of sensitive privileges, such as \"Act as part of the operating system\" or \"Debug programs\".",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nPrivilege Use >> Sensitive Privilege Use - Failure",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77973",
                        "V-63483"
                    ],
                    "ccis": [
                        "CCI-000172",
                        "CCI-002234"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220770",
                            "title": "SRG-OS-000327-GPOS-00127",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "0d03d5bd-43e1-4d4e-9e20-1a4482735c90",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220771",
                    "rule_id": "SV-220771r851977",
                    "rule_id_src": "SV-220771r851977_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000115",
                    "group_title": "The system must be configured to audit Privilege Use - Sensitive Privilege Use successes.",
                    "rule_title": "The system must be configured to audit Privilege Use - Sensitive Privilege Use successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Privilege Use >> \"Audit Sensitive Privilege Use\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nSensitive Privilege Use records events related to use of sensitive privileges, such as \"Act as part of the operating system\" or \"Debug programs\".",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nPrivilege Use >> Sensitive Privilege Use - Success",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77977",
                        "V-63487"
                    ],
                    "ccis": [
                        "CCI-000172",
                        "CCI-002234"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220771",
                            "title": "SRG-OS-000327-GPOS-00127",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "4fa1fe00-db2e-40b5-af5f-8d0ec8648b84",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220772",
                    "rule_id": "SV-220772r569187",
                    "rule_id_src": "SV-220772r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000120",
                    "group_title": "The system must be configured to audit System - IPSec Driver failures.",
                    "rule_title": "The system must be configured to audit System - IPSec Driver failures.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> System >> \"Audit IPSec Driver\" with \"Failure\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nIPSec Driver records events related to the IPSec Driver such as dropped packets.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nSystem >> IPSec Driver - Failure",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63491",
                        "SV-77981"
                    ],
                    "ccis": [
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220772",
                            "title": "SRG-OS-000477-GPOS-00222",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "721fbde0-f2e9-4739-bfe3-9e6a726cefc1",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220773",
                    "rule_id": "SV-220773r569187",
                    "rule_id_src": "SV-220773r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000130",
                    "group_title": "The system must be configured to audit System - Other System Events successes.",
                    "rule_title": "The system must be configured to audit System - Other System Events successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> System >> \"Audit Other System Events\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAudit Other System Events records information related to cryptographic key operations and the Windows Firewall service.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective. \n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\"\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nSystem >> Other System Events - Success",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63499",
                        "SV-77989"
                    ],
                    "ccis": [
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220773",
                            "title": "SRG-OS-000471-GPOS-00215",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "a5b810a9-83ec-4913-87ef-759fbf8acd91",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220774",
                    "rule_id": "SV-220774r569187",
                    "rule_id_src": "SV-220774r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000135",
                    "group_title": "The system must be configured to audit System - Other System Events failures.",
                    "rule_title": "The system must be configured to audit System - Other System Events failures.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> System >> \"Audit Other System Events\" with \"Failure\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAudit Other System Events records information related to cryptographic key operations and the Windows Firewall service.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective. \n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\"\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nSystem >> Other System Events - Failure",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77993",
                        "V-63503"
                    ],
                    "ccis": [
                        "CCI-000172"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220774",
                            "title": "SRG-OS-000471-GPOS-00215",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "228a6be0-aee3-47f2-b2f3-a749341fcba6",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220775",
                    "rule_id": "SV-220775r851978",
                    "rule_id_src": "SV-220775r851978_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000140",
                    "group_title": "The system must be configured to audit System - Security State Change successes.",
                    "rule_title": "The system must be configured to audit System - Security State Change successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> System >> \"Audit Security State Change\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nSecurity State Change records events related to changes in the security state, such as startup and shutdown of the system.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nSystem >> Security State Change - Success",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63507",
                        "SV-77997"
                    ],
                    "ccis": [
                        "CCI-000172",
                        "CCI-002234"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220775",
                            "title": "SRG-OS-000327-GPOS-00127",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "2dce1e40-28c4-4f8a-a4de-3d87dfc25e1a",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220776",
                    "rule_id": "SV-220776r851979",
                    "rule_id_src": "SV-220776r851979_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000150",
                    "group_title": "The system must be configured to audit System - Security System Extension successes.",
                    "rule_title": "The system must be configured to audit System - Security System Extension successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> System >> \"Audit Security System Extension\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nSecurity System Extension records events related to extension code being loaded by the security subsystem.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nSystem >> Security System Extension - Success",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78003",
                        "V-63513"
                    ],
                    "ccis": [
                        "CCI-000172",
                        "CCI-002234"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220776",
                            "title": "SRG-OS-000327-GPOS-00127",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "db7c685d-8cb1-4ad6-a549-7edb679b3be1",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220777",
                    "rule_id": "SV-220777r851980",
                    "rule_id_src": "SV-220777r851980_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000155",
                    "group_title": "The system must be configured to audit System - System Integrity failures.",
                    "rule_title": "The system must be configured to audit System - System Integrity failures.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> System >> \"Audit System Integrity\" with \"Failure\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nSystem Integrity records events related to violations of integrity to the security subsystem.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nSystem >> System Integrity - Failure",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63515",
                        "SV-78005"
                    ],
                    "ccis": [
                        "CCI-000172",
                        "CCI-002234"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220777",
                            "title": "SRG-OS-000327-GPOS-00127",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "401ce8dc-179b-4d4e-9a7c-5fcdb5fca702",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220778",
                    "rule_id": "SV-220778r851981",
                    "rule_id_src": "SV-220778r851981_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000160",
                    "group_title": "The system must be configured to audit System - System Integrity successes.",
                    "rule_title": "The system must be configured to audit System - System Integrity successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> System >> \"Audit System Integrity\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nSystem Integrity records events related to violations of integrity to the security subsystem.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following.  If the system does not audit the following, this is a finding:\n\nSystem >> System Integrity - Success",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78007",
                        "V-63517"
                    ],
                    "ccis": [
                        "CCI-000172",
                        "CCI-002234"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220778",
                            "title": "SRG-OS-000327-GPOS-00127",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "86e727ac-6aed-4889-91bc-898d67c86b23",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220779",
                    "rule_id": "SV-220779r877391",
                    "rule_id_src": "SV-220779r877391_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000500",
                    "group_title": "The Application event log size must be configured to 32768 KB or greater.",
                    "rule_title": "The Application event log size must be configured to 32768 KB or greater.",
                    "fix_text": "If the system is configured to send audit records directly to an audit server, this is NA.  This must be documented with the ISSO.\n\nConfigure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Event Log Service >> Application >> \"Specify the maximum log file size (KB)\" to \"Enabled\" with a \"Maximum Log Size (KB)\" of \"32768\" or greater.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inadequate log size will cause the log to fill up quickly.  This may prevent audit events from being recorded properly and require frequent attention by administrative personnel.",
                    "check_content": "If the system is configured to send audit records directly to an audit server, this is NA.  This must be documented with the ISSO.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive:  HKEY_LOCAL_MACHINE\nRegistry Path:  \\SOFTWARE\\Policies\\Microsoft\\Windows\\EventLog\\Application\\\n\nValue Name:  MaxSize\n\nValue Type:  REG_DWORD\nValue:  0x00008000 (32768) (or greater)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63519",
                        "SV-78009"
                    ],
                    "ccis": [
                        "CCI-001849"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220779",
                            "title": "SRG-OS-000341-GPOS-00132",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "9992fc30-f7a2-42a2-8597-1e3582471c19",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220780",
                    "rule_id": "SV-220780r877391",
                    "rule_id_src": "SV-220780r877391_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000505",
                    "group_title": "The Security event log size must be configured to 1024000 KB or greater.",
                    "rule_title": "The Security event log size must be configured to 1024000 KB or greater.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Event Log Service >> Security >> \"Specify the maximum log file size (KB)\" to \"Enabled\" with a \"Maximum Log Size (KB)\" of \"1024000\" or greater.\n\nIf the system is configured to send audit records directly to an audit server, documented with the ISSO.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inadequate log size will cause the log to fill up quickly.  This may prevent audit events from being recorded properly and require frequent attention by administrative personnel.",
                    "check_content": "If the system is configured to send audit records directly to an audit server, this is NA. This must be documented with the ISSO.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\EventLog\\Security\\\n\nValue Name: MaxSize\n\nValue Type: REG_DWORD\nValue: 0x000fa000 (1024000) (or greater)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63523",
                        "SV-78013"
                    ],
                    "ccis": [
                        "CCI-001849"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220780",
                            "title": "SRG-OS-000341-GPOS-00132",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "0e88bf7f-07b9-4b5b-b4d7-c830faa3a2c4",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220781",
                    "rule_id": "SV-220781r877391",
                    "rule_id_src": "SV-220781r877391_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000510",
                    "group_title": "The System event log size must be configured to 32768 KB or greater.",
                    "rule_title": "The System event log size must be configured to 32768 KB or greater.",
                    "fix_text": "If the system is configured to send audit records directly to an audit server, this is NA.  This must be documented with the ISSO.\n\nConfigure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Event Log Service >> System >> \"Specify the maximum log file size (KB)\" to \"Enabled\" with a \"Maximum Log Size (KB)\" of \"32768\" or greater.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inadequate log size will cause the log to fill up quickly.  This may prevent audit events from being recorded properly and require frequent attention by administrative personnel.",
                    "check_content": "If the system is configured to send audit records directly to an audit server, this is NA.  This must be documented with the ISSO.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive:  HKEY_LOCAL_MACHINE\nRegistry Path:  \\SOFTWARE\\Policies\\Microsoft\\Windows\\EventLog\\System\\\n\nValue Name:  MaxSize\n\nValue Type:  REG_DWORD\nValue:  0x00008000 (32768) (or greater)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78017",
                        "V-63527"
                    ],
                    "ccis": [
                        "CCI-001849"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220781",
                            "title": "SRG-OS-000341-GPOS-00132",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "2fbf0a48-adbc-44df-9d79-059cf42f852e",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220782",
                    "rule_id": "SV-220782r569187",
                    "rule_id_src": "SV-220782r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000515",
                    "group_title": "Windows 10 permissions for the Application event log must prevent access by non-privileged accounts.",
                    "rule_title": "Windows 10 permissions for the Application event log must prevent access by non-privileged accounts.",
                    "fix_text": "Ensure the permissions on the Application event log (Application.evtx) are configured to prevent standard user accounts or groups from having access. The default permissions listed below satisfy this requirement.\n\nEventlog - Full Control\nSYSTEM - Full Control\nAdministrators - Full Control\n\nThe default location is the \"%SystemRoot%\\SYSTEM32\\WINEVT\\LOGS\" directory.\n\nIf the location of the logs has been changed, when adding Eventlog to the permissions, it must be entered as \"NT Service\\Eventlog\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  The Application event log may be  susceptible to tampering if proper permissions are not applied.",
                    "check_content": "Verify the permissions on the Application event log (Application.evtx). Standard user accounts or groups must not have access. The default permissions listed below satisfy this requirement.\n\nEventlog - Full Control\nSYSTEM - Full Control\nAdministrators - Full Control\n\nThe default location is the \"%SystemRoot%\\SYSTEM32\\WINEVT\\LOGS\" directory. They may have been moved to another folder.\n\nIf the permissions for these files are not as restrictive as the ACLs listed, this is a finding.\n\nNOTE: If \"APPLICATION PACKAGE AUTHORITY\\ALL APPLICATION PACKAGES\" has Special Permissions, this would not be a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63533",
                        "SV-78023"
                    ],
                    "ccis": [
                        "CCI-000162",
                        "CCI-000163",
                        "CCI-000164"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220782",
                            "title": "SRG-OS-000057-GPOS-00027",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "760af6fe-389e-4fdd-871f-de5443b55841",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220783",
                    "rule_id": "SV-220783r569187",
                    "rule_id_src": "SV-220783r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000520",
                    "group_title": "Windows 10 permissions for the Security event log must prevent access by non-privileged accounts.",
                    "rule_title": "Windows 10 permissions for the Security event log must prevent access by non-privileged accounts.",
                    "fix_text": "Ensure the permissions on the Security event log (Security.evtx) are configured to prevent standard user accounts or groups from having access.  The default permissions listed below satisfy this requirement.\n\nEventlog - Full Control\nSYSTEM - Full Control\nAdministrators - Full Control\n\nThe default location is the \"%SystemRoot%\\SYSTEM32\\WINEVT\\LOGS\" directory.\n\nIf the location of the logs has been changed, when adding Eventlog to the permissions, it must be entered as \"NT Service\\Eventlog\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  The Security event log may disclose sensitive information or be  susceptible to tampering if proper permissions are not applied.",
                    "check_content": "Verify the permissions on the Security event log (Security.evtx). Standard user accounts or groups must not have access. The default permissions listed below satisfy this requirement.\n\nEventlog - Full Control\nSYSTEM - Full Control\nAdministrators - Full Control\n\nThe default location is the \"%SystemRoot%\\SYSTEM32\\WINEVT\\LOGS\" directory. They may have been moved to another folder.\n\nIf the permissions for these files are not as restrictive as the ACLs listed, this is a finding.\n\nNOTE: If \"APPLICATION PACKAGE AUTHORITY\\ALL APPLICATION PACKAGES\" has Special Permissions, this would not be a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63537",
                        "SV-78027"
                    ],
                    "ccis": [
                        "CCI-000162",
                        "CCI-000163",
                        "CCI-000164"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220783",
                            "title": "SRG-OS-000057-GPOS-00027",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "525c27b3-1b50-4c5f-a19a-921a3cec2326",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220784",
                    "rule_id": "SV-220784r569187",
                    "rule_id_src": "SV-220784r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000525",
                    "group_title": "Windows 10 permissions for the System event log must prevent access by non-privileged accounts.",
                    "rule_title": "Windows 10 permissions for the System event log must prevent access by non-privileged accounts.",
                    "fix_text": "Ensure the permissions on the System event log (System.evtx) are configured to prevent standard user accounts or groups from having access. The default permissions listed below satisfy this requirement.\n\nEventlog - Full Control\nSYSTEM - Full Control\nAdministrators - Full Control\n\nThe default location is the \"%SystemRoot%\\SYSTEM32\\WINEVT\\LOGS\" directory.\n\nIf the location of the logs has been changed, when adding Eventlog to the permissions, it must be entered as \"NT Service\\Eventlog\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  The System event log may be  susceptible to tampering if proper permissions are not applied.",
                    "check_content": "Verify the permissions on the System event log (System.evtx). Standard user accounts or groups must not have access. The default permissions listed below satisfy this requirement.\n\nEventlog - Full Control\nSYSTEM - Full Control\nAdministrators - Full Control\n\nThe default location is the \"%SystemRoot%\\SYSTEM32\\WINEVT\\LOGS\" directory. They may have been moved to another folder.\n\nIf the permissions for these files are not as restrictive as the ACLs listed, this is a finding.\n\nNOTE: If \"APPLICATION PACKAGE AUTHORITY\\ALL APPLICATION PACKAGES\" has Special Permissions, this would not be a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63541",
                        "SV-78031"
                    ],
                    "ccis": [
                        "CCI-000162",
                        "CCI-000163",
                        "CCI-000164"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220784",
                            "title": "SRG-OS-000057-GPOS-00027",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "41c1cdfa-e3d3-4802-b39a-378dc5ae7c4e",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220786",
                    "rule_id": "SV-220786r569187",
                    "rule_id_src": "SV-220786r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000555",
                    "group_title": "Windows 10 must be configured to audit Other Policy Change Events Failures.",
                    "rule_title": "Windows 10 must be configured to audit Other Policy Change Events Failures.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Policy Change>> \"Audit Other Policy Change Events\" with \"Failure\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAudit Other Policy Change Events contains events about EFS Data Recovery Agent policy changes, changes in Windows Filtering Platform filter, status on Security policy settings updates for local Group Policy settings, Central Access Policy changes, and detailed troubleshooting events for Cryptographic Next Generation (CNG) operations.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following. If the system does not audit the following, this is a finding:\n\nPolicy Change  >> Other Policy Change Events - Failure\n",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-99553",
                        "SV-108657"
                    ],
                    "ccis": [
                        "CCI-000130"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220786",
                            "title": "SRG-OS-000037-GPOS-00015",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "cc824da6-c0af-4c1e-bb73-35f286588740",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220787",
                    "rule_id": "SV-220787r569187",
                    "rule_id_src": "SV-220787r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000560",
                    "group_title": "Windows 10 must be configured to audit other Logon/Logoff Events Successes.",
                    "rule_title": "Windows 10 must be configured to audit other Logon/Logoff Events Successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Logon/Logoff >> \"Audit Other Logon/Logoff Events\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAudit Other Logon/Logoff Events determines whether Windows generates audit events for other logon or logoff events. Logon events are essential to understanding user activity and detecting potential attacks.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following. If the system does not audit the following, this is a finding:\n\nLogon/Logoff  >> Other Logon/Logoff Events - Success\n",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-99543",
                        "SV-108647"
                    ],
                    "ccis": [
                        "CCI-000130"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220787",
                            "title": "SRG-OS-000037-GPOS-00015",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "17a55adb-aea4-4196-81c6-a055a371f4b1",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220788",
                    "rule_id": "SV-220788r569187",
                    "rule_id_src": "SV-220788r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000565",
                    "group_title": "Windows 10 must be configured to audit other Logon/Logoff Events Failures.",
                    "rule_title": "Windows 10 must be configured to audit other Logon/Logoff Events Failures.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Logon/Logoff >> \"Audit Other Logon/Logoff Events\" with \"Failure\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAudit Other Logon/Logoff Events determines whether Windows generates audit events for other logon or logoff events. Logon events are essential to understanding user activity and detecting potential attacks.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following. If the system does not audit the following, this is a finding:\n\nLogon/Logoff  >> Other Logon/Logoff Events - Failure\n",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-99541",
                        "SV-108645"
                    ],
                    "ccis": [
                        "CCI-000130"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220788",
                            "title": "SRG-OS-000037-GPOS-00015",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "b775b0f5-d589-45b5-abcb-2900dbc13d00",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220789",
                    "rule_id": "SV-220789r819664",
                    "rule_id_src": "SV-220789r819664_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000570",
                    "group_title": "Windows 10 must be configured to audit Detailed File Share Failures.",
                    "rule_title": "Windows 10 must be configured to audit Detailed File Share Failures.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Object Access >> “Audit Detailed File Share\" with \"Failure\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAudit Detailed File Share allows the auditing of attempts to access files and folders on a shared folder.\n\nThe Detailed File Share setting logs an event every time a file or folder is accessed, whereas the File Share setting only records one event for any connection established between a client and file share. Detailed File Share audit events include detailed information about the permissions or other criteria used to grant or deny access.",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a command prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following. If the system does not audit the following, this is a finding:\n\nObject Access  >> Detailed File Share - Failure",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-108649",
                        "V-99545"
                    ],
                    "ccis": [
                        "CCI-000130"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220789",
                            "title": "SRG-OS-000037-GPOS-00015",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "fbcf9b3b-85ce-41e3-9d4c-0079643ca333",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220790",
                    "rule_id": "SV-220790r569187",
                    "rule_id_src": "SV-220790r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000575",
                    "group_title": "Windows 10 must be configured to audit MPSSVC Rule-Level Policy Change Successes.",
                    "rule_title": "Windows 10 must be configured to audit MPSSVC Rule-Level Policy Change Successes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Policy Change >> “Audit MPSSVC Rule-Level Policy Change\" with \"Success\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAudit MPSSVC Rule-Level Policy Change determines whether the operating system generates audit events when changes are made to policy rules for the Microsoft Protection Service (MPSSVC.exe). ",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following. If the system does not audit the following, this is a finding:\n\nPolicy Change  >> MPSSVC Rule-Level Policy Change - Success\n",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-108651",
                        "V-99547"
                    ],
                    "ccis": [
                        "CCI-000130"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220790",
                            "title": "SRG-OS-000037-GPOS-00015",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "6f51392b-6662-4a2b-a78d-ba936eeb61fa",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220791",
                    "rule_id": "SV-220791r569187",
                    "rule_id_src": "SV-220791r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-AU-000580",
                    "group_title": "Windows 10 must be configured to audit MPSSVC Rule-Level Policy Change Failures.",
                    "rule_title": "Windows 10 must be configured to audit MPSSVC Rule-Level Policy Change Failures.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Advanced Audit Policy Configuration >> System Audit Policies >> Policy Change >> “Audit MPSSVC Rule-Level Policy Change\" with \"Failure\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nAudit MPSSVC Rule-Level Policy Change determines whether the operating system generates audit events when changes are made to policy rules for the Microsoft Protection Service (MPSSVC.exe). ",
                    "check_content": "Security Option \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" must be set to \"Enabled\" (WN10-SO-000030) for the detailed auditing subcategories to be effective.\n\nUse the AuditPol tool to review the current Audit Policy configuration:\nOpen a Command Prompt with elevated privileges (\"Run as Administrator\").\nEnter \"AuditPol /get /category:*\".\n\nCompare the AuditPol settings with the following. If the system does not audit the following, this is a finding:\n\nPolicy Change  >> MPSSVC Rule-Level Policy Change - Failure\n",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-99549",
                        "SV-108653"
                    ],
                    "ccis": [
                        "CCI-000130"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220791",
                            "title": "SRG-OS-000037-GPOS-00015",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "c18f81b9-4e54-4edb-9201-977ae45317fb",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220792",
                    "rule_id": "SV-220792r569187",
                    "rule_id_src": "SV-220792r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000005",
                    "group_title": "Camera access from the lock screen must be disabled.",
                    "rule_title": "Camera access from the lock screen must be disabled.",
                    "fix_text": "If the device does not have a camera, this is NA.\n\nConfigure the policy value for Computer Configuration >> Administrative Templates >> Control Panel >> Personalization >> \"Prevent enabling lock screen camera\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Enabling camera access from the lock screen could allow for unauthorized use.  Requiring logon will ensure the device is only used by authorized personnel.",
                    "check_content": "If the device does not have a camera, this is NA.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\Personalization\\\n\nValue Name: NoLockScreenCamera\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78035",
                        "V-63545"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220792",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "cfc4f79d-43f6-4a74-bb5c-370efaeba52b",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220793",
                    "rule_id": "SV-220793r819667",
                    "rule_id_src": "SV-220793r819667_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000007",
                    "group_title": "Windows 10 must cover or disable the built-in or attached camera when not in use.",
                    "rule_title": "Windows 10 must cover or disable the built-in or attached camera when not in use.",
                    "fix_text": "If the camera is not disconnected or covered, the following registry entry is required:\n \nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistryPath\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\CapabilityAccessManager\\ConsentStore\\webcam\n\nValue Name: Value\nValue Data: Deny",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "It is detrimental for operating systems to provide, or install by default, functionality exceeding requirements or mission objectives. These unnecessary capabilities or services are often overlooked and therefore may remain unsecured. They increase the risk to the platform by providing additional attack vectors.\n\nFailing to disconnect from collaborative computing devices (i.e., cameras) can result in subsequent compromises of organizational information. Providing easy methods to physically disconnect from such devices after a collaborative computing session helps to ensure that participants actually carry out the disconnect activity without having to go through complex and tedious procedures.\n\nSatisfies: SRG-OS-000095-GPOS-00049, SRG-OS-000370-GPOS-00155",
                    "check_content": "If the device or operating system does not have a camera installed, this requirement is not applicable.\n\nThis requirement is not applicable to mobile devices (smartphones and tablets) where the use of the camera is a local AO decision.\n\nThis requirement is not applicable to dedicated VTC suites located in approved VTC locations that are centrally managed.\n\nFor an external camera, if there is not a method for the operator to manually disconnect the camera at the end of collaborative computing sessions, this is a finding.\n\nFor a built-in camera, the camera must be protected by a camera cover (e.g., laptop camera cover slide) when not in use. \n\nIf the built-in camera is not protected with a camera cover, or if the built-in camera is not disabled in the bios, this is a finding.\n\nIf the camera is not disconnected or covered, the following registry entry is required:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistryPath\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\CapabilityAccessManager\\ConsentStore\\webcam\n\nValue Name: Value\nValue Data: Deny\n\nIf \"Value\" is set to a value other than \"Deny\" and the collaborative computing device has not been authorized for use, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-109197",
                        "V-100093"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220793",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "58862ce3-65f0-44ec-a187-79a16d38bf5d",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220794",
                    "rule_id": "SV-220794r569187",
                    "rule_id_src": "SV-220794r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000010",
                    "group_title": "The display of slide shows on the lock screen must be disabled.",
                    "rule_title": "The display of slide shows on the lock screen must be disabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Control Panel >> Personalization >> \"Prevent enabling lock screen slide show\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Slide shows that are displayed on the lock screen could display sensitive information to unauthorized personnel.  Turning off this feature will limit access to the information to a logged on user.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\Personalization\\\n\nValue Name: NoLockScreenSlideshow\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78039",
                        "V-63549"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220794",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "9fe74675-4510-4cf0-88bc-78924f686021",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220795",
                    "rule_id": "SV-220795r569187",
                    "rule_id_src": "SV-220795r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000020",
                    "group_title": "IPv6 source routing must be configured to highest protection.",
                    "rule_title": "IPv6 source routing must be configured to highest protection.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> MSS (Legacy) >> \"MSS: (DisableIPSourceRouting IPv6) IP source routing protection level (protects against packet spoofing)\" to \"Highest protection, source routing is completely disabled\".\n\nThis policy setting requires the installation of the MSS-Legacy custom templates included with the STIG package.  \"MSS-Legacy.admx\" and \" MSS-Legacy.adml\" must be copied to the \\Windows\\PolicyDefinitions and \\Windows\\PolicyDefinitions\\en-US directories respectively.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Configuring the system to disable IPv6 source routing protects against spoofing.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Services\\Tcpip6\\Parameters\\\n\nValue Name: DisableIpSourceRouting\n\nValue Type: REG_DWORD\nValue: 2",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78045",
                        "V-63555"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220795",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "ea82962c-1972-4c6b-8b5a-8d8f3101dd30",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220796",
                    "rule_id": "SV-220796r569187",
                    "rule_id_src": "SV-220796r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000025",
                    "group_title": "The system must be configured to prevent IP source routing.",
                    "rule_title": "The system must be configured to prevent IP source routing.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> MSS (Legacy) >> \"MSS: (DisableIPSourceRouting) IP source routing protection level (protects against packet spoofing)\" to \"Highest protection, source routing is completely disabled\".\n\nThis policy setting requires the installation of the MSS-Legacy custom templates included with the STIG package.  \"MSS-Legacy.admx\" and \" MSS-Legacy.adml\" must be copied to the \\Windows\\PolicyDefinitions and \\Windows\\PolicyDefinitions\\en-US directories respectively.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Configuring the system to disable IP source routing protects against spoofing.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\\\n\nValue Name: DisableIPSourceRouting\n\nValue Type: REG_DWORD\nValue: 2",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78049",
                        "V-63559"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220796",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "d1733d25-1f82-4cd8-9956-53f52db03bfa",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220797",
                    "rule_id": "SV-220797r569187",
                    "rule_id_src": "SV-220797r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-CC-000030",
                    "group_title": "The system must be configured to prevent Internet Control Message Protocol (ICMP) redirects from overriding Open Shortest Path First (OSPF) generated routes.",
                    "rule_title": "The system must be configured to prevent Internet Control Message Protocol (ICMP) redirects from overriding Open Shortest Path First (OSPF) generated routes.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> MSS (Legacy) >> \"MSS: (EnableICMPRedirect) Allow ICMP redirects to override OSPF generated routes\" to \"Disabled\".\n\nThis policy setting requires the installation of the MSS-Legacy custom templates included with the STIG package.  \"MSS-Legacy.admx\" and \" MSS-Legacy.adml\" must be copied to the \\Windows\\PolicyDefinitions and \\Windows\\PolicyDefinitions\\en-US directories respectively.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Allowing ICMP redirect of routes can lead to traffic not being routed properly.   When disabled, this forces ICMP to be routed via shortest path first.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\\\n\nValue Name: EnableICMPRedirect\n\nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63563",
                        "SV-78053"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220797",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "c54db325-8454-48db-b8eb-407579691972",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220798",
                    "rule_id": "SV-220798r851985",
                    "rule_id_src": "SV-220798r851985_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-CC-000035",
                    "group_title": "The system must be configured to ignore NetBIOS name release requests except from WINS servers.",
                    "rule_title": "The system must be configured to ignore NetBIOS name release requests except from WINS servers.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> MSS (Legacy) >> \"MSS: (NoNameReleaseOnDemand) Allow the computer to ignore NetBIOS name release requests except from WINS servers\" to \"Enabled\".\n\nThis policy setting requires the installation of the MSS-Legacy custom templates included with the STIG package.  \"MSS-Legacy.admx\" and \" MSS-Legacy.adml\" must be copied to the \\Windows\\PolicyDefinitions and \\Windows\\PolicyDefinitions\\en-US directories respectively.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Configuring the system to ignore name release requests, except from WINS servers, prevents a denial of service (DoS) attack. The DoS consists of sending a NetBIOS name release request to the server for each entry in the server's cache, causing a response delay in the normal operation of the servers WINS resolution capability.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive:  HKEY_LOCAL_MACHINE\nRegistry Path:  \\SYSTEM\\CurrentControlSet\\Services\\Netbt\\Parameters\\\n\nValue Name:  NoNameReleaseOnDemand\n\nValue Type:  REG_DWORD\nValue:  1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63567",
                        "SV-78057"
                    ],
                    "ccis": [
                        "CCI-002385"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220798",
                            "title": "SRG-OS-000420-GPOS-00186",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "57e5079d-53de-47a1-8ef7-eb719e6e9041",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220799",
                    "rule_id": "SV-220799r569187",
                    "rule_id_src": "SV-220799r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000037",
                    "group_title": "Local administrator accounts must have their privileged token filtered to prevent elevated privileges from being used over the network on domain systems.",
                    "rule_title": "Local administrator accounts must have their privileged token filtered to prevent elevated privileges from being used over the network on domain systems.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> MS Security Guide >> \"Apply UAC restrictions to local accounts on network logons\" to \"Enabled\".\n\nThis policy setting requires the installation of the SecGuide custom templates included with the STIG package.  \"SecGuide.admx\" and \"SecGuide.adml\" must be copied to the \\Windows\\PolicyDefinitions and \\Windows\\PolicyDefinitions\\en-US directories respectively.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "A compromised local administrator account can provide means for an attacker to move laterally between domain systems.\n\nWith User Account Control enabled, filtering the privileged token for built-in administrator accounts will prevent the elevated privileges of these accounts from being used over the network.",
                    "check_content": "If the system is not a member of a domain, this is NA.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\\n\nValue Name: LocalAccountTokenFilterPolicy\n\nValue Type: REG_DWORD\nValue: 0x00000000 (0)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63597",
                        "SV-78087"
                    ],
                    "ccis": [
                        "CCI-001084"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220799",
                            "title": "SRG-OS-000134-GPOS-00068",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "bc4b94dd-7339-49fc-9f2f-de85f8f2a5ae",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220800",
                    "rule_id": "SV-220800r569187",
                    "rule_id_src": "SV-220800r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000038",
                    "group_title": "WDigest Authentication must be disabled.",
                    "rule_title": "WDigest Authentication must be disabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> MS Security Guide >> \"WDigest Authentication (disabling may require KB2871997)\" to \"Disabled\".\n\nThe patch referenced in the policy title is not required for Windows 10.\n\nThis policy setting requires the installation of the SecGuide custom templates included with the STIG package.  \"SecGuide.admx\" and \"SecGuide.adml\" must be copied to the \\Windows\\PolicyDefinitions and \\Windows\\PolicyDefinitions\\en-US directories respectively.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "When the WDigest Authentication protocol is enabled, plain text passwords are stored in the Local Security Authority Subsystem Service (LSASS) exposing them to theft.  WDigest is disabled by default in Windows 10.  This setting ensures this is enforced.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Control\\SecurityProviders\\Wdigest\\\n\nValue Name: UseLogonCredential\n\nType: REG_DWORD\nValue:  0x00000000 (0)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-71763",
                        "SV-86387"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220800",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "50c24364-e121-4cce-961e-b1fd7656fe50",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220801",
                    "rule_id": "SV-220801r569187",
                    "rule_id_src": "SV-220801r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000039",
                    "group_title": "Run as different user must be removed from context menus.",
                    "rule_title": "Run as different user must be removed from context menus.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> MS Security Guide >> \"Remove \"Run as Different User\" from context menus\" to \"Enabled\".\n\nThis policy setting requires the installation of the SecGuide custom templates included with the STIG package.  \"SecGuide.admx\" and \"SecGuide.adml\" must be copied to the \\Windows\\PolicyDefinitions and \\Windows\\PolicyDefinitions\\en-US directories respectively.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The \"Run as different user\" selection from context menus allows the use of credentials other than the currently logged on user.  Using privileged credentials in a standard user session can expose those credentials to theft.  Removing this option from context menus helps prevent this from occurring.",
                    "check_content": "If the following registry values do not exist or are not configured as specified, this is a finding.\nThe policy configures the same Value Name, Type and Value under four different registry paths.\n\nRegistry Hive:  HKEY_LOCAL_MACHINE\nRegistry Paths:  \n\\SOFTWARE\\Classes\\batfile\\shell\\runasuser\\\n\\SOFTWARE\\Classes\\cmdfile\\shell\\runasuser\\\n\\SOFTWARE\\Classes\\exefile\\shell\\runasuser\\\n\\SOFTWARE\\Classes\\mscfile\\shell\\runasuser\\\n\nValue Name:  SuppressionPolicy\n\nType:  REG_DWORD\nValue:  0x00001000 (4096)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-86953",
                        "V-72329"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220801",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "23e72654-33cd-4e20-b2b5-d22cdab1d382",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220802",
                    "rule_id": "SV-220802r569187",
                    "rule_id_src": "SV-220802r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000040",
                    "group_title": "Insecure logons to an SMB server must be disabled.",
                    "rule_title": "Insecure logons to an SMB server must be disabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Network >> Lanman Workstation >> \"Enable insecure guest logons\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Insecure guest logons allow unauthenticated access to shared folders.  Shared resources on a system must require authentication to establish proper access.",
                    "check_content": "Windows 10 v1507 LTSB version does not include this setting; it is NA for those systems.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\LanmanWorkstation\\\n\nValue Name: AllowInsecureGuestAuth\n\nType: REG_DWORD\nValue: 0x00000000 (0)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63569",
                        "SV-78059"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220802",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "5c4e6bd0-b12c-4579-b9ef-8837b90f6182",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220803",
                    "rule_id": "SV-220803r569187",
                    "rule_id_src": "SV-220803r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000044",
                    "group_title": "Internet connection sharing must be disabled.",
                    "rule_title": "Internet connection sharing must be disabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Network >> Network Connections >> \"Prohibit use of Internet Connection Sharing on your DNS domain network\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Internet connection sharing makes it possible for an existing internet connection, such as through wireless, to be shared and used by other systems essentially creating a mobile hotspot.  This exposes the system sharing the connection to others with potentially malicious purpose.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\Network Connections\\\n\nValue Name: NC_ShowSharedAccessUI\n\nType: REG_DWORD\nValue: 0x00000000 (0)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-86389",
                        "V-71765"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220803",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "47dede4f-7b54-425d-a4a0-f6006558950e",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220805",
                    "rule_id": "SV-220805r569187",
                    "rule_id_src": "SV-220805r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000052",
                    "group_title": "Windows 10 must be configured to prioritize ECC Curves with longer key lengths first.",
                    "rule_title": "Windows 10 must be configured to prioritize ECC Curves with longer key lengths first.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Network >> SSL Configuration Settings >> \"ECC Curve Order\" to \"Enabled\" with \"ECC Curve Order:\" including the following in the order listed:\n\nNistP384\nNistP256",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Use of weak or untested encryption algorithms undermines the purposes of utilizing encryption to protect data. By default Windows uses ECC curves with shorter key lengths first.  Requiring ECC curves with longer key lengths to be prioritized first helps ensure more secure algorithms are used.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Cryptography\\Configuration\\SSL\\00010002\\\n\nValue Name: EccCurves\n\nValue Type: REG_MULTI_SZ\nValue: NistP384 NistP256",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-74413",
                        "SV-89087"
                    ],
                    "ccis": [
                        "CCI-000803"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220805",
                            "title": "SRG-OS-000120-GPOS-00061",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "0c2bb038-61c9-49d3-9f2a-9de1b6eb8784",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220806",
                    "rule_id": "SV-220806r890427",
                    "rule_id_src": "SV-220806r890427_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000055",
                    "group_title": "Simultaneous connections to the internet or a Windows domain must be limited.",
                    "rule_title": "Simultaneous connections to the internet or a Windows domain must be limited.",
                    "fix_text": "The default behavior for \"Minimize the number of simultaneous connections to the Internet or a Windows Domain\" is \"Enabled\".\n\nIf this must be corrected, configure the policy value for Computer Configuration >> Administrative Templates >> Network >> Windows Connection Manager >> \"Minimize the number of simultaneous connections to the Internet or a Windows Domain\" to \"Enabled\". \n\nUnder \"Options\", set \"Minimize Policy Options\" to \"3 = Prevent Wi-Fi When on Ethernet\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Multiple network connections can provide additional attack vectors to a system and must be limited. The \"Minimize the number of simultaneous connections to the Internet or a Windows Domain\" setting prevents systems from automatically establishing multiple connections. When both wired and wireless connections are available, for example, the less-preferred connection (typically wireless) will be disconnected.",
                    "check_content": "The default behavior for \"Minimize the number of simultaneous connections to the Internet or a Windows Domain\" is \"Enabled\".\n\nIf the registry value name below does not exist, this is not a finding.\n\nIf it exists and is configured with a value of \"3\", this is not a finding.\n\nIf it exists and is configured with a value of \"0\", this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\WcmSvc\\GroupPolicy\\\n\nValue Name: fMinimizeConnections\n\nValue Type: REG_DWORD\nValue: 3 (or if the Value Name does not exist)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78071",
                        "V-63581"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220806",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "86598f29-cd61-4e83-8651-7f1bb18993f7",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220807",
                    "rule_id": "SV-220807r569187",
                    "rule_id_src": "SV-220807r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000060",
                    "group_title": "Connections to non-domain networks when connected to a domain authenticated network must be blocked.",
                    "rule_title": "Connections to non-domain networks when connected to a domain authenticated network must be blocked.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Network >> Windows Connection Manager >> \"Prohibit connection to non-domain networks when connected to domain authenticated network\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Multiple network connections can provide additional attack vectors to a system and should be limited.  When connected to a domain, communication must go through the domain connection.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\WcmSvc\\GroupPolicy\\\n\nValue Name: fBlockNonDomain\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63585",
                        "SV-78075"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220807",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "9a3b971a-30b4-4a7b-b3a2-cc055cc12452",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220808",
                    "rule_id": "SV-220808r569187",
                    "rule_id_src": "SV-220808r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000065",
                    "group_title": "Wi-Fi Sense must be disabled.",
                    "rule_title": "Wi-Fi Sense must be disabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Network >> WLAN Service >> WLAN Settings>> \"Allow Windows to automatically connect to suggested open hotspots, to networks shared by contacts, and to hotspots offering paid services\" to \"Disabled\".   \n\nv1507 LTSB does not include this group policy setting.  It may be configured through other means such as using group policy from a later version of Windows 10 or a registry update.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Wi-Fi Sense automatically connects the system to known hotspots and networks that contacts have shared.  It also allows the sharing of the system's known networks to contacts.  Automatically connecting to hotspots and shared networks can expose a system to unsecured or potentially malicious systems.",
                    "check_content": "This is NA as of v1803 of Windows 10; Wi-Fi sense is no longer available.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\WcmSvc\\wifinetworkmanager\\config\\\n\nValue Name: AutoConnectAllowedOEM\n\nType: REG_DWORD\nValue: 0x00000000 (0)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63591",
                        "SV-78081"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220808",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "d2659781-51a4-450e-9dae-9cb7000362e3",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220809",
                    "rule_id": "SV-220809r569187",
                    "rule_id_src": "SV-220809r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000066",
                    "group_title": "Command line data must be included in process creation events.",
                    "rule_title": "Command line data must be included in process creation events.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> System >> Audit Process Creation >> \"Include command line in process creation events\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nEnabling \"Include command line data for process creation events\" will record the command line information with the process creation events in the log.  This can provide additional detail when malware has run on a system.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE \nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\Audit\\\n\nValue Name: ProcessCreationIncludeCmdLine_Enabled\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-68817",
                        "SV-83409"
                    ],
                    "ccis": [
                        "CCI-000135"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220809",
                            "title": "SRG-OS-000042-GPOS-00020",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "a7fbfbcd-7d0f-4827-911a-5aa3756c493a",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220810",
                    "rule_id": "SV-220810r569187",
                    "rule_id_src": "SV-220810r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000068",
                    "group_title": "Windows 10 must be configured to enable Remote host allows delegation of non-exportable credentials.",
                    "rule_title": "Windows 10 must be configured to enable Remote host allows delegation of non-exportable credentials.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> System >> Credentials Delegation >> \"Remote host allows delegation of non-exportable credentials\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "An exportable version of credentials is provided to remote hosts when using credential delegation which exposes them to theft on the remote host.  Restricted Admin mode or Remote Credential Guard allow delegation of non-exportable credentials providing additional protection of the credentials.  Enabling this configures the host to support Restricted Admin mode or Remote Credential Guard.",
                    "check_content": "This is NA for Windows 10 LTSC\\B versions 1507 and 1607.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\CredentialsDelegation\\\n\nValue Name: AllowProtectedCreds\n\nType: REG_DWORD\nValue: 0x00000001 (1)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-89373",
                        "V-74699"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220810",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "21ef07a0-c501-4d0a-be8b-972c1d6847d8",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220811",
                    "rule_id": "SV-220811r569187",
                    "rule_id_src": "SV-220811r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-CC-000070",
                    "group_title": "Virtualization Based Security must be enabled on Windows 10 with the platform security level configured to Secure Boot or Secure Boot with DMA Protection.",
                    "rule_title": "Virtualization Based Security must be enabled on Windows 10 with the platform security level configured to Secure Boot or Secure Boot with DMA Protection.",
                    "fix_text": "Virtualization based security, including Credential Guard, currently cannot be implemented in virtual desktop implementations (VDI) due to specific supporting requirements including a TPM, UEFI with Secure Boot, and the capability to run the Hyper-V feature within the virtual desktop.\n\nFor VDIs where the virtual desktop instance is deleted or refreshed upon logoff, this is NA.\n\nConfigure the policy value for Computer Configuration >> Administrative Templates >> System >> Device Guard >> \"Turn On Virtualization Based Security\" to \"Enabled\" with \"Secure Boot\" or \"Secure Boot and DMA Protection\" selected for \"Select Platform Security Level:\".\n\nA Microsoft article on Credential Guard system requirement can be found at the following link.\nhttps://technet.microsoft.com/en-us/itpro/windows/keep-secure/credential-guard-requirements",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Virtualization Based Security (VBS) provides the platform for the additional security features, Credential Guard and Virtualization based protection of code integrity.  Secure Boot is the minimum security level with DMA protection providing additional memory protection.  DMA Protection requires a CPU that supports input/output memory management unit (IOMMU).",
                    "check_content": "Confirm Virtualization Based Security is enabled and running with Secure Boot or Secure Boot and DMA Protection.\n\nFor those devices that support virtualization based security (VBS) features, including Credential Guard or protection of code integrity, this must be enabled. If the system meets the hardware and firmware dependencies for enabling VBS but it is not enabled, this is a CAT III finding.\n\nVirtualization based security, including Credential Guard, currently cannot be implemented in virtual desktop implementations (VDI) due to specific supporting requirements including a TPM, UEFI with Secure Boot, and the capability to run the Hyper-V feature within the virtual desktop.\n\nFor VDIs where the virtual desktop instance is deleted or refreshed upon logoff, this is NA.\n\nRun \"PowerShell\" with elevated privileges (run as administrator).\n\nEnter the following:\n\n\"Get-CimInstance -ClassName Win32_DeviceGuard -Namespace root\\Microsoft\\Windows\\DeviceGuard\"\n\nIf \"RequiredSecurityProperties\" does not include a value of \"2\" indicating \"Secure Boot\" (e.g., \"{1, 2}\"), this is a finding.\n\nIf \"Secure Boot and DMA Protection\" is configured, \"3\" will also be displayed in the results (e.g., \"{1, 2, 3}\").\n\nIf \"VirtualizationBasedSecurityStatus\" is not a value of \"2\" indicating \"Running\", this is a finding.\n\nAlternately:\n\nRun \"System Information\".\n\nUnder \"System Summary\", verify the following:\n\nIf \"Device Guard Virtualization based security\" does not display \"Running\", this is finding.\n\nIf \"Device Guard Required Security Properties\" does not display \"Base Virtualization Support, Secure Boot\", this is finding.\n\nIf \"Secure Boot and DMA Protection\" is configured, \"DMA Protection\" will also be displayed (e.g., \"Base Virtualization Support, Secure Boot, DMA Protection\").\n\nThe policy settings referenced in the Fix section will configure the following registry values. However due to hardware requirements, the registry values alone do not ensure proper function.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\DeviceGuard\\\n\nValue Name: EnableVirtualizationBasedSecurity\nValue Type: REG_DWORD\nValue: 1\n\nValue Name: RequirePlatformSecurityFeatures\nValue Type: REG_DWORD\nValue: 1 (Secure Boot only) or 3 (Secure Boot and DMA Protection)\n\nA Microsoft article on Credential Guard system requirement can be found at the following link:\n\nhttps://technet.microsoft.com/en-us/itpro/windows/keep-secure/credential-guard-requirements\n\nNOTE:  The severity level for the requirement will be upgraded to CAT II starting January 2020.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63595",
                        "SV-78085"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220811",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "52ed3dd2-1983-47de-879a-b42cb70990be",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220812",
                    "rule_id": "SV-220812r890430",
                    "rule_id_src": "SV-220812r890430_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-CC-000075",
                    "group_title": "Credential Guard must be running on Windows 10 domain-joined systems.",
                    "rule_title": "Credential Guard must be running on Windows 10 domain-joined systems.",
                    "fix_text": "Virtualization based security, including Credential Guard, currently cannot be implemented in VDIs due to specific supporting requirements including a TPM, UEFI with Secure Boot, and the capability to run the Hyper-V feature within the virtual desktop.\n\nFor VDIs where the virtual desktop instance is deleted or refreshed upon logoff, this is Not Applicable.\n\nFor VDIs with persistent desktops, this may be downgraded to a CAT II only where administrators have specific tokens for the VDI. Administrator accounts on virtual desktops must only be used on systems in the VDI; they may not have administrative privileges on any other systems such as servers and physical workstations.\n\nConfigure the policy value for Computer Configuration >> Administrative Templates >> System >> Device Guard >> \"Turn On Virtualization Based Security\" to \"Enabled\" with \"Enabled with UEFI lock\" selected for \"Credential Guard Configuration:\".\n\nv1507 LTSB does not include selection options; select \"Enable Credential Guard\".\n\nA Microsoft TechNet article on Credential Guard, including system requirement details, can be found at the following link:\n\nhttps://docs.microsoft.com/en-us/windows/access-protection/credential-guard/credential-guard",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Credential Guard uses virtualization based security to protect information that could be used in credential theft attacks if compromised. This authentication information, which was stored in the Local Security Authority (LSA) in previous versions of Windows, is isolated from the rest of operating system and can only be accessed by privileged system software.",
                    "check_content": "Confirm Credential Guard is running on domain-joined systems.\n\nFor devices that support Credential Guard, this feature must be enabled. Organizations must take the appropriate action to acquire and implement compatible hardware with Credential Guard enabled.\n\nVirtualization based security, including Credential Guard, currently cannot be implemented in virtual desktop implementations (VDIs) due to specific supporting requirements including a TPM, UEFI with Secure Boot, and the capability to run the Hyper-V feature within the virtual desktop.\n\nFor VDIs where the virtual desktop instance is deleted or refreshed upon logoff, this is Not Applicable.\n\nRun \"PowerShell\" with elevated privileges (run as administrator). \n\nEnter the following:\n\"Get-CimInstance -ClassName Win32_DeviceGuard -Namespace root\\Microsoft\\Windows\\DeviceGuard\"\n\nIf \"SecurityServicesRunning\" does not include a value of \"1\" (e.g., \"{1, 2}\"), this is a finding.\n\nAlternately:\n\nRun \"System Information\".\n\nUnder \"System Summary\", verify the following:\n\nIf \"Virtualization-based Security Services Running\" does not list \"Credential Guard\", this is finding.\n\nThe policy settings referenced in the Fix section will configure the following registry value. However, due to hardware requirements, the registry value alone does not ensure proper function.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\DeviceGuard\\\n\nValue Name: LsaCfgFlags\nValue Type: REG_DWORD\nValue: 0x00000001 (1) (Enabled with UEFI lock)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78089",
                        "V-63599"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220812",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "30654cf7-d187-43a2-a983-199b8ae2102a",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220813",
                    "rule_id": "SV-220813r569187",
                    "rule_id_src": "SV-220813r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000085",
                    "group_title": "Early Launch Antimalware, Boot-Start Driver Initialization Policy must prevent boot drivers.",
                    "rule_title": "Early Launch Antimalware, Boot-Start Driver Initialization Policy must prevent boot drivers.",
                    "fix_text": "Ensure that Early Launch Antimalware - Boot-Start Driver Initialization policy is set to enforce \"Good, unknown and bad but critical\" (preventing \"bad\").\n\nIf this needs to be corrected configure the policy value for Computer Configuration >> Administrative Templates >> System >> Early Launch Antimalware >> \"Boot-Start Driver Initialization Policy\" to \"Enabled” with \"Good, unknown and bad but critical\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "By being launched first by the kernel, ELAM ( Early Launch Antimalware) is ensured to be launched before any third-party software, and is therefore able to detect malware in the boot process and prevent it from initializing.",
                    "check_content": "The default behavior is for Early Launch Antimalware - Boot-Start Driver Initialization policy is to enforce \"Good, unknown and bad but critical\" (preventing \"bad\").\n\nIf the registry value name below does not exist, this a finding.\n\nIf it exists and is configured with a value of \"7\", this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Policies\\EarlyLaunch\\\n\nValue Name: DriverLoadPolicy\n\nValue Type: REG_DWORD\nValue: 1, 3, or 8 \n\nPossible values for this setting are:\n8 - Good only\n1 - Good and unknown\n3 - Good, unknown and bad but critical\n7 - All (which includes \"Bad\" and would be a finding)\n",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78097",
                        "V-63607"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220813",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "50a4bc9a-3272-4e4c-88cf-803c2d45e16e",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220814",
                    "rule_id": "SV-220814r569187",
                    "rule_id_src": "SV-220814r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000090",
                    "group_title": "Group Policy objects must be reprocessed even if they have not changed.",
                    "rule_title": "Group Policy objects must be reprocessed even if they have not changed.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> System >> Group Policy >> \"Configure registry policy processing\" to \"Enabled\" and select the option \"Process even if the Group Policy objects have not changed\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Enabling this setting and then selecting the \"Process even if the Group Policy objects have not changed\" option ensures that the policies will be reprocessed even if none have been changed. This way, any unauthorized changes are forced to match the domain-based group policy settings again.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\Group Policy\\{35378EAC-683F-11D2-A89A-00C04FBBCFA2}\n\nValue Name: NoGPOListChanges\n\nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78099",
                        "V-63609"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220814",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "59ff7578-276b-44cf-88c8-7587433c50db",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220815",
                    "rule_id": "SV-220815r569187",
                    "rule_id_src": "SV-220815r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000100",
                    "group_title": "Downloading print driver packages over HTTP must be prevented.",
                    "rule_title": "Downloading print driver packages over HTTP must be prevented.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> System >> Internet Communication Management >> Internet Communication settings >> \"Turn off downloading of print drivers over HTTP\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Some features may communicate with the vendor, sending system information or downloading data or components for the feature.  Turning off this capability will prevent potentially sensitive information from being sent outside the enterprise and uncontrolled updates to the system.  This setting prevents the computer from downloading print driver packages over HTTP.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows NT\\Printers\\\n\nValue Name: DisableWebPnPDownload\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63615",
                        "SV-78105"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220815",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "7a481b3c-8281-47bf-928c-d8b4790d4f12",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220816",
                    "rule_id": "SV-220816r569187",
                    "rule_id_src": "SV-220816r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000105",
                    "group_title": "Web publishing and online ordering wizards must be prevented from downloading a list of providers.",
                    "rule_title": "Web publishing and online ordering wizards must be prevented from downloading a list of providers.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> System >> Internet Communication Management >> Internet Communication settings >> \"Turn off Internet download for Web publishing and online ordering wizards\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Some features may communicate with the vendor, sending system information or downloading data or components for the feature.  Turning off this capability will prevent potentially sensitive information from being sent outside the enterprise and uncontrolled updates to the system.  This setting prevents Windows from downloading a list of providers for the Web publishing and online ordering wizards.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\Explorer\\\n\nValue Name: NoWebServices\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63621",
                        "SV-78111"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220816",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "4f12589e-e3ed-4259-aa2e-b443e792c8ad",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220817",
                    "rule_id": "SV-220817r569187",
                    "rule_id_src": "SV-220817r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000110",
                    "group_title": "Printing over HTTP must be prevented.",
                    "rule_title": "Printing over HTTP must be prevented.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> System >> Internet Communication Management >> Internet Communication settings >> \"Turn off printing over HTTP\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Some features may communicate with the vendor, sending system information or downloading data or components for the feature.  Turning off this capability will prevent potentially sensitive information from being sent outside the enterprise and uncontrolled updates to the system.  This setting prevents the client computer from printing over HTTP, which allows the computer to print to printers on the intranet as well as the Internet.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows NT\\Printers\\\n\nValue Name: DisableHTTPPrinting\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63623",
                        "SV-78113"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220817",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "c45b9789-d674-4223-b45c-ba3a50a0d941",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220818",
                    "rule_id": "SV-220818r857191",
                    "rule_id_src": "SV-220818r857191_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000115",
                    "group_title": "Systems must at least attempt device authentication using certificates.",
                    "rule_title": "Systems must at least attempt device authentication using certificates.",
                    "fix_text": "This requirement is applicable to domain-joined systems. For standalone or nondomain-joined systems, this is NA.\n\nThe default behavior for \"Support device authentication using certificate\" is \"Automatic\".\n\nIf this needs to be corrected, configure the policy value for Computer Configuration >> Administrative Templates >> System >> Kerberos >> \"Support device authentication using certificate\" to \"Not Configured or \"Enabled\" with either option selected in \"Device authentication behavior using certificate:\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Using certificates to authenticate devices to the domain provides increased security over passwords.  By default systems will attempt to authenticate using certificates and fall back to passwords if the domain controller does not support certificates for devices.  This may also be configured to always use certificates for device authentication.",
                    "check_content": "This requirement is applicable to domain-joined systems. For standalone or nondomain-joined systems, this is NA.\n\nThe default behavior for \"Support device authentication using certificate\" is \"Automatic\".\n\nIf the registry value name below does not exist, this is not a finding.\n\nIf it exists and is configured with a value of \"1\", this is not a finding.\n\nIf it exists and is configured with a value of \"0\", this is a finding.\n\nRegistry Hive:  HKEY_LOCAL_MACHINE\nRegistry Path:  \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\Kerberos\\Parameters\\\n\nValue Name:  DevicePKInitEnabled\nValue Type:  REG_DWORD\nValue:  1 (or if the Value Name does not exist)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63627",
                        "SV-78117"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220818",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "0db623f2-3b05-4184-a645-cd0da4a21fc8",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220819",
                    "rule_id": "SV-220819r569187",
                    "rule_id_src": "SV-220819r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000120",
                    "group_title": "The network selection user interface (UI) must not be displayed on the logon screen.",
                    "rule_title": "The network selection user interface (UI) must not be displayed on the logon screen.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> System >> Logon >> \"Do not display network selection UI\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Enabling interaction with the network selection UI allows users to change connections to available networks without signing into Windows.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\System\\\n\nValue Name: DontDisplayNetworkSelectionUI\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78119",
                        "V-63629"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220819",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "4461fd8a-941d-4428-86dd-2aac490e1776",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220820",
                    "rule_id": "SV-220820r857194",
                    "rule_id_src": "SV-220820r857194_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000130",
                    "group_title": "Local users on domain-joined computers must not be enumerated.",
                    "rule_title": "Local users on domain-joined computers must not be enumerated.",
                    "fix_text": "This requirement is applicable to domain-joined systems. For standalone or nondomain-joined systems, this is NA.\n\nConfigure the policy value for Computer Configuration >> Administrative Templates >> System >> Logon >> \"Enumerate local users on domain-joined computers\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The username is one part of logon credentials that could be used to gain access to a system. Preventing the enumeration of users limits this information to authorized personnel.",
                    "check_content": "This requirement is applicable to domain-joined systems. For standalone or nondomain-joined systems, this is NA.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\System\\\n\nValue Name: EnumerateLocalUsers\n\nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78123",
                        "V-63633"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220820",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "0c5b0526-6c61-4651-ba56-9750beb9a6c6",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220821",
                    "rule_id": "SV-220821r851986",
                    "rule_id_src": "SV-220821r851986_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000145",
                    "group_title": "Users must be prompted for a password on resume from sleep (on battery).",
                    "rule_title": "Users must be prompted for a password on resume from sleep (on battery).",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> System >> Power Management >> Sleep Settings >> \"Require a password when a computer wakes (on battery)\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Authentication must always be required when accessing a system.  This setting ensures the user is prompted for a password on resume from sleep (on battery).",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Power\\PowerSettings\\0e796bdb-100d-47d6-a2d5-f7d2daa51f51\\\n\nValue Name: DCSettingIndex\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78135",
                        "V-63645"
                    ],
                    "ccis": [
                        "CCI-002038"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220821",
                            "title": "SRG-OS-000373-GPOS-00156",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "46e4596b-1e1b-48aa-9c46-74b3a758083a",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220822",
                    "rule_id": "SV-220822r851987",
                    "rule_id_src": "SV-220822r851987_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000150",
                    "group_title": "The user must be prompted for a password on resume from sleep (plugged in).",
                    "rule_title": "The user must be prompted for a password on resume from sleep (plugged in).",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> System >> Power Management >> Sleep Settings >> \"Require a password when a computer wakes (plugged in)\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Authentication must always be required when accessing a system.  This setting ensures the user is prompted for a password on resume from sleep (plugged in).",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Power\\PowerSettings\\0e796bdb-100d-47d6-a2d5-f7d2daa51f51\\\n\nValue Name: ACSettingIndex\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78139",
                        "V-63649"
                    ],
                    "ccis": [
                        "CCI-002038"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220822",
                            "title": "SRG-OS-000373-GPOS-00156",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "baad8fb6-d5ce-4297-a73b-ef0b9747ec90",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220823",
                    "rule_id": "SV-220823r569187",
                    "rule_id_src": "SV-220823r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-CC-000155",
                    "group_title": "Solicited Remote Assistance must not be allowed.",
                    "rule_title": "Solicited Remote Assistance must not be allowed.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> System >> Remote Assistance >> \"Configure Solicited Remote Assistance\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Remote assistance allows another user to view or take control of the local session of a user.  Solicited assistance is help that is specifically requested by the local user.  This may allow unauthorized parties access to the resources on the computer.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows NT\\Terminal Services\\\n\nValue Name: fAllowToGetHelp\n \nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78141",
                        "V-63651"
                    ],
                    "ccis": [
                        "CCI-001090"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220823",
                            "title": "SRG-OS-000138-GPOS-00069",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "6b2d78f0-944c-4357-ba7d-d63bd312150a",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220824",
                    "rule_id": "SV-220824r877039",
                    "rule_id_src": "SV-220824r877039_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000165",
                    "group_title": "Unauthenticated RPC clients must be restricted from connecting to the RPC server.",
                    "rule_title": "Unauthenticated RPC clients must be restricted from connecting to the RPC server.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> System >> Remote Procedure Call >> \"Restrict Unauthenticated RPC clients\" to \"Enabled\" and \"Authenticated\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Configuring RPC to restrict unauthenticated RPC clients from connecting to the RPC server will prevent anonymous connections.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows NT\\Rpc\\\n\nValue Name: RestrictRemoteClients\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63657",
                        "SV-78147"
                    ],
                    "ccis": [
                        "CCI-001967"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220824",
                            "title": "SRG-OS-000379-GPOS-00164",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "200d13e3-7d4d-4fe9-844d-49330c5dd6dd",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220825",
                    "rule_id": "SV-220825r569187",
                    "rule_id_src": "SV-220825r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-CC-000170",
                    "group_title": "The setting to allow Microsoft accounts to be optional for modern style apps must be enabled.",
                    "rule_title": "The setting to allow Microsoft accounts to be optional for modern style apps must be enabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> App Runtime >> \"Allow Microsoft accounts to be optional\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Control of credentials and the system must be maintained within the enterprise.  Enabling this setting allows enterprise credentials to be used with modern style apps that support this, instead of Microsoft accounts.",
                    "check_content": "Windows 10 LTSC\\B versions do not support the Microsoft Store and modern apps; this is NA for those systems.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\\n\nValue Name: MSAOptional\n\nValue Type: REG_DWORD\nValue: 0x00000001 (1)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63659",
                        "SV-78149"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220825",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "d7e75f75-75f0-4b84-bbbf-487054ee6702",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220826",
                    "rule_id": "SV-220826r569187",
                    "rule_id_src": "SV-220826r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-CC-000175",
                    "group_title": "The Application Compatibility Program Inventory must be prevented from collecting data and sending the information to Microsoft.",
                    "rule_title": "The Application Compatibility Program Inventory must be prevented from collecting data and sending the information to Microsoft.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Application Compatibility >> \"Turn off Inventory Collector\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Some features may communicate with the vendor, sending system information or downloading data or components for the feature.  Turning off this capability will prevent potentially sensitive information from being sent outside the enterprise and uncontrolled updates to the system.  This setting will prevent the Program Inventory from collecting data about a system and sending the information to Microsoft.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\AppCompat\\\n\nValue Name: DisableInventory\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63663",
                        "SV-78153"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220826",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "6d99e2dc-ac11-4aaf-9ce6-ddeaf43eb442",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220827",
                    "rule_id": "SV-220827r851989",
                    "rule_id_src": "SV-220827r851989_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-CC-000180",
                    "group_title": "Autoplay must be turned off for non-volume devices.",
                    "rule_title": "Autoplay must be turned off for non-volume devices.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> AutoPlay Policies >> \"Disallow Autoplay for non-volume devices\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Allowing autoplay to execute may introduce malicious code to a system.  Autoplay begins reading from a drive as soon as you insert media in the drive.  As a result, the setup file of programs or music on audio media may start.  This setting will disable autoplay for non-volume devices (such as Media Transfer Protocol (MTP) devices).",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\Explorer\\\n\nValue Name: NoAutoplayfornonVolume\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78157",
                        "V-63667"
                    ],
                    "ccis": [
                        "CCI-001764"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220827",
                            "title": "SRG-OS-000368-GPOS-00154",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "021952ba-4170-4a07-affb-e2b40121355b",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220828",
                    "rule_id": "SV-220828r851990",
                    "rule_id_src": "SV-220828r851990_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-CC-000185",
                    "group_title": "The default autorun behavior must be configured to prevent autorun commands.",
                    "rule_title": "The default autorun behavior must be configured to prevent autorun commands.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> AutoPlay Policies >> \"Set the default behavior for AutoRun\" to \"Enabled:Do not execute any autorun commands\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Allowing autorun commands to execute may introduce malicious code to a system.  Configuring this setting prevents autorun commands from executing.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\Explorer\\\n\nValue Name: NoAutorun\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63671",
                        "SV-78161"
                    ],
                    "ccis": [
                        "CCI-001764"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220828",
                            "title": "SRG-OS-000368-GPOS-00154",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "e1ea5aa1-6a8b-45e1-b9d3-629172a5de98",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220829",
                    "rule_id": "SV-220829r851991",
                    "rule_id_src": "SV-220829r851991_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-CC-000190",
                    "group_title": "Autoplay must be disabled for all drives.",
                    "rule_title": "Autoplay must be disabled for all drives.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> AutoPlay Policies >> \"Turn off AutoPlay\" to \"Enabled:All Drives\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Allowing autoplay to execute may introduce malicious code to a system.  Autoplay begins reading from a drive as soon as you insert media in the drive.  As a result, the setup file of programs or music on audio media may start.  By default, autoplay is disabled on removable drives, such as the floppy disk drive (but not the CD-ROM drive) and on network drives.  If you enable this policy, you can also disable autoplay on all drives.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path:  \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\policies\\Explorer\\\n\nValue Name: NoDriveTypeAutoRun\n\nValue Type: REG_DWORD\nValue: 0x000000ff (255)\n\nNote: If the value for NoDriveTypeAutorun is entered manually, it must be entered as \"ff\" when Hexadecimal is selected, or \"255\" with Decimal selected.  Using the policy value specified in the Fix section will enter it correctly.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63673",
                        "SV-78163"
                    ],
                    "ccis": [
                        "CCI-001764"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220829",
                            "title": "SRG-OS-000368-GPOS-00154",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "936b5160-9d8d-4fdf-ad12-9ce641c141ff",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220830",
                    "rule_id": "SV-220830r569187",
                    "rule_id_src": "SV-220830r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000195",
                    "group_title": "Enhanced anti-spoofing for facial recognition must be enabled on Window 10.",
                    "rule_title": "Enhanced anti-spoofing for facial recognition must be enabled on Window 10.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Biometrics >> Facial Features >> \"Configure enhanced anti-spoofing\" to \"Enabled\". \n\nv1607:\nThe policy name is \"Use enhanced anti-spoofing when available\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Enhanced anti-spoofing provides additional protections when using facial recognition with devices that support it.",
                    "check_content": "Windows 10 v1507 LTSB version does not include this setting; it is NA for those systems.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Biometrics\\FacialFeatures\\\n\nValue Name: EnhancedAntiSpoofing\n\nValue Type: REG_DWORD\nValue: 0x00000001 (1)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78167",
                        "V-63677"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220830",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "bac2c594-e6ef-4d7f-ae8b-77c23be58041",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220831",
                    "rule_id": "SV-220831r569187",
                    "rule_id_src": "SV-220831r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-CC-000197",
                    "group_title": "Microsoft consumer experiences must be turned off.",
                    "rule_title": "Microsoft consumer experiences must be turned off.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Cloud Content >> \"Turn off Microsoft consumer experiences\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Microsoft consumer experiences provides suggestions and notifications to users, which may include the installation of Windows Store apps.  Organizations may control the execution of applications through other means such as whitelisting.  Turning off Microsoft consumer experiences will help prevent the unwanted installation of suggested applications.",
                    "check_content": "Windows 10 v1507 LTSB version does not include this setting; it is NA for those systems.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\CloudContent\\\n\nValue Name: DisableWindowsConsumerFeatures\n\nType: REG_DWORD\nValue: 0x00000001 (1)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-71771",
                        "SV-86395"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220831",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "911a5536-8f10-46d7-bbaa-f35738e6da97",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220832",
                    "rule_id": "SV-220832r569187",
                    "rule_id_src": "SV-220832r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000200",
                    "group_title": "Administrator accounts must not be enumerated during elevation.",
                    "rule_title": "Administrator accounts must not be enumerated during elevation.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Credential User Interface >> \"Enumerate administrator accounts on elevation\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Enumeration of administrator accounts when elevating can provide part of the logon information to an unauthorized user.  This setting configures the system to always require users to type in a username and password to elevate a running application.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\CredUI\\\n\nValue Name: EnumerateAdministrators\n\nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63679",
                        "SV-78169"
                    ],
                    "ccis": [
                        "CCI-001084"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220832",
                            "title": "SRG-OS-000134-GPOS-00068",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "bbc400d0-3996-4408-a67c-bcad3b6c8c40",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220833",
                    "rule_id": "SV-220833r793250",
                    "rule_id_src": "SV-220833r793250_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000204",
                    "group_title": "If Enhanced diagnostic data is enabled it must be limited to the minimum required to support Windows Analytics.",
                    "rule_title": "If Enhanced diagnostic data is enabled it must be limited to the minimum required to support Windows Analytics.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Data Collection and Preview Builds >> \"Limit Enhanced diagnostic data to the minimum required by Windows Analytics\" to \"Enabled\" with \"Enable Windows Analytics collection\" selected in \"Options:\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Some features may communicate with the vendor, sending system information or downloading data or components for the feature. Limiting this capability will prevent potentially sensitive information from being sent outside the enterprise. The \"Enhanced\" level for telemetry includes additional information beyond \"Security\" and \"Basic\" on how Windows and apps are used and advanced reliability data. Windows Analytics can use a \"limited enhanced\" level to provide information such as health data for devices.",
                    "check_content": "This setting requires v1709 or later of Windows 10; it is NA for prior versions.\r\n\r\nIf \"Enhanced\" level is enabled for telemetry, this must be configured. If \"Security\" or \"Basic\" are configured, this is NA. (See V-220834).\r\n\r\nIf the following registry value does not exist or is not configured as specified, this is a finding.\r\n\r\nRegistry Hive: HKEY_LOCAL_MACHINE\r\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection\\\r\n\r\nValue Name: LimitEnhancedDiagnosticDataWindowsAnalytics\r\n\r\nType: REG_DWORD\r\nValue: 0x00000001 (1)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-96859",
                        "V-82145"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220833",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "4f61e78f-9489-4fbd-9506-695da79c14d8",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220834",
                    "rule_id": "SV-220834r569187",
                    "rule_id_src": "SV-220834r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000205",
                    "group_title": "Windows Telemetry must not be configured to Full.",
                    "rule_title": "Windows Telemetry must not be configured to Full.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Data Collection and Preview Builds >> \"Allow Telemetry\" to \"Enabled\" with \"0 - Security [Enterprise Only]\" or \"1 - Basic\" selected in \"Options:\".   \n\nIf an organization is using v1709 or later of Windows 10 this may be configured to \"2 - Enhanced\" to support Windows Analytics. V-82145 must also be configured to limit the Enhanced diagnostic data to the minimum required by Windows Analytics.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Some features may communicate with the vendor, sending system information or downloading data or components for the feature. Limiting this capability will prevent potentially sensitive information from being sent outside the enterprise. The \"Security\" option for Telemetry configures the lowest amount of data, effectively none outside of the Malicious Software Removal Tool (MSRT), Defender and telemetry client settings. \"Basic\" sends basic diagnostic and usage data and may be required to support some Microsoft services. \"Enhanced\" includes additional information on how Windows and apps are used and advanced reliability data. Windows Analytics can use a \"limited enhanced\" level to provide information such as health data for devices.  This requires the configuration of an additional setting available with v1709 and later of Windows 10. ",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection\\\n\nValue Name: AllowTelemetry\n\nType: REG_DWORD\nValue: 0x00000000 (0) (Security)\n0x00000001 (1) (Basic)\n\nIf an organization is using v1709 or later of Windows 10 this may be configured to \"Enhanced\" to support Windows Analytics. V-82145 must also be configured to limit the Enhanced diagnostic data to the minimum required by Windows Analytics. This registry value will then be 0x00000002 (2).",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63683",
                        "SV-78173"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220834",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "49b443be-e041-4a72-9d71-2f3ea5f6e042",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220835",
                    "rule_id": "SV-220835r857197",
                    "rule_id_src": "SV-220835r857197_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-CC-000206",
                    "group_title": "Windows Update must not obtain updates from other PCs on the internet.",
                    "rule_title": "Windows Update must not obtain updates from other PCs on the internet.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Delivery Optimization >> \"Download Mode\" to \"Enabled\" with any option except \"Internet\" selected.\n\nAcceptable selections include:\nBypass (100)\nGroup (2)\nHTTP only (0)\nLAN (1)\nSimple (99)\n\nv1507 (LTSB) does not include this group policy setting locally. For domain-joined systems, configure through domain group policy as \"HTTP only (0)\" or \"Lan (1)\". \n\nFor standalone or nondomain-joined systems, configure using Settings >> Update & Security >> Windows Update >> Advanced Options >> \"Choose how updates are delivered\" with either \"Off\" or \"PCs on my local network\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Windows 10 allows Windows Update to obtain updates from additional sources instead of Microsoft. In addition to Microsoft, updates can be obtained from and sent to PCs on the local network as well as on the internet. This is part of the Windows Update trusted process; however, to minimize outside exposure, obtaining updates from or sending to systems on the internet must be prevented.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\DeliveryOptimization\\\n\nValue Name: DODownloadMode\n\nValue Type: REG_DWORD\nValue: 0x00000000 (0) - No peering (HTTP Only)\n0x00000001 (1) - Peers on same NAT only (LAN)\n0x00000002 (2) - Local Network / Private group peering (Group)\n0x00000063 (99) - Simple download mode, no peering (Simple)\n0x00000064 (100) - Bypass mode, Delivery Optimization not used (Bypass)\n\nA value of 0x00000003 (3), Internet, is a finding.\n\nv1507 LTSB:\nDomain joined systems:\nVerify the registry value above.\nIf the value is not 0x00000000 (0) or 0x00000001 (1), this is a finding.\n\nStandalone or nondomain-joined systems (configured in Settings):\nIf the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\DeliveryOptimization\\Config\\\n\nValue Name: DODownloadMode\n\nValue Type: REG_DWORD\nValue: 0x00000000 (0) - Off\n0x00000001 (1) - LAN",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-80171",
                        "V-65681"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220835",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "8e24b045-1206-450d-bf10-7306dc3c93f7",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220836",
                    "rule_id": "SV-220836r569187",
                    "rule_id_src": "SV-220836r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000210",
                    "group_title": "The Windows Defender SmartScreen for Explorer must be enabled.",
                    "rule_title": "The Windows Defender SmartScreen for Explorer must be enabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> File Explorer >> \"Configure Windows Defender SmartScreen\" to \"Enabled\" with \"Warn and prevent bypass\" selected. \n\nWindows 10 includes duplicate policies for this setting. It can also be configured under Computer Configuration >> Administrative Templates >> Windows Components >> Windows Defender SmartScreen >> Explorer.\n\nv1607 LTSB:\nConfigure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> File Explorer >> \"Configure Windows SmartScreen\" to \"Enabled\". (Selection options are not available.)\n\nv1507 LTSB:\nConfigure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> File Explorer >> \"Configure Windows SmartScreen\" to \"Enabled\" with \"Require approval from an administrator before running downloaded unknown software\" selected.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Windows Defender SmartScreen helps protect systems from programs downloaded from the internet that may be malicious. Enabling Windows Defender SmartScreen will warn or prevent users from running potentially malicious programs.",
                    "check_content": "This is applicable to unclassified systems, for other systems this is NA.\n\nIf the following registry values do not exist or are not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\System\\\n\nValue Name: EnableSmartScreen\n\nValue Type: REG_DWORD\nValue: 0x00000001 (1)\n\nAnd\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\System\\\n\nValue Name: ShellSmartScreenLevel\n\nValue Type: REG_SZ\nValue: Block\n\nv1607 LTSB:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\System\\\n\nValue Name: EnableSmartScreen\n\nValue Type: REG_DWORD\nValue: 0x00000001 (1)\n\nv1507 LTSB:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\System\\\n\nValue Name: EnableSmartScreen\n\nValue Type: REG_DWORD\nValue: 0x00000002 (2)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63685",
                        "SV-78175"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220836",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "0430aa7b-7bb4-416e-a8d6-fe7bbe8f20d8",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220837",
                    "rule_id": "SV-220837r851992",
                    "rule_id_src": "SV-220837r851992_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000215",
                    "group_title": "Explorer Data Execution Prevention must be enabled.",
                    "rule_title": "Explorer Data Execution Prevention must be enabled.",
                    "fix_text": "The default behavior is for data execution prevention to be turned on for file explorer.\n\nIf this needs to be corrected, configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> File Explorer >> \"Turn off Data Execution Prevention for Explorer\" to \"Not Configured\" or \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Data Execution Prevention (DEP) provides additional protection by performing  checks on memory to help prevent malicious code from running.  This setting will prevent Data Execution Prevention from being turned off for File Explorer.",
                    "check_content": "The default behavior is for data execution prevention to be turned on for file explorer.\n\nIf the registry value name below does not exist, this is not a finding.\n\nIf it exists and is configured with a value of \"0\", this is not a finding.\n\nIf it exists and is configured with a value of \"1\", this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\Explorer\\\n\nValue Name: NoDataExecutionPrevention\n\nValue Type: REG_DWORD\nValue: 0 (or if the Value Name does not exist)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63689",
                        "SV-78179"
                    ],
                    "ccis": [
                        "CCI-002824"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220837",
                            "title": "SRG-OS-000433-GPOS-00192",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "0d1af6a1-fd15-45b9-9782-1cfdccb5ce81",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220838",
                    "rule_id": "SV-220838r851993",
                    "rule_id_src": "SV-220838r851993_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-CC-000220",
                    "group_title": "Turning off File Explorer heap termination on corruption must be disabled.",
                    "rule_title": "Turning off File Explorer heap termination on corruption must be disabled.",
                    "fix_text": "The default behavior is for File Explorer heap termination on corruption to be enabled.\n\nIf this needs to be corrected, configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> File Explorer >> \"Turn off heap termination on corruption\" to \"Not Configured\" or \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Legacy plug-in applications may continue to function when a File Explorer session has become corrupt.  Disabling this feature will prevent this.",
                    "check_content": "The default behavior is for File Explorer heap termination on corruption to be enabled.\n\nIf the registry Value Name below does not exist, this is not a finding.\n\nIf it exists and is configured with a value of \"0\", this is not a finding.\n\nIf it exists and is configured with a value of \"1\", this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\Explorer\\\n\nValue Name: NoHeapTerminationOnCorruption\n\nValue Type: REG_DWORD\nValue: 0x00000000 (0) (or if the Value Name does not exist)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78181",
                        "V-63691"
                    ],
                    "ccis": [
                        "CCI-002385"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220838",
                            "title": "SRG-OS-000420-GPOS-00186",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "0a093ca9-4b2e-4af6-adac-7381f61b3036",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220839",
                    "rule_id": "SV-220839r569187",
                    "rule_id_src": "SV-220839r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000225",
                    "group_title": "File Explorer shell protocol must run in protected mode.",
                    "rule_title": "File Explorer shell protocol must run in protected mode.",
                    "fix_text": "The default behavior is for shell protected mode to be turned on for file explorer.\n\nIf this needs to be corrected, configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> File Explorer >> \"Turn off shell protocol protected mode\" to \"Not Configured\" or \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The shell protocol will  limit the set of folders applications can open when run in protected mode.  Restricting files an application can open, to a limited set of folders, increases the security of Windows.",
                    "check_content": "The default behavior is for shell protected mode to be turned on for file explorer.\n\nIf the registry value name below does not exist, this is not a finding.\n\nIf it exists and is configured with a value of \"0\", this is not a finding.\n\nIf it exists and is configured with a value of \"1\", this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\Explorer\\\n\nValue Name: PreXPSP2ShellProtocolBehavior\n\nValue Type: REG_DWORD\nValue: 0 (or if the Value Name does not exist)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78185",
                        "V-63695"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220839",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "03ca1963-77de-40ae-84fb-c87d52093c14",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220840",
                    "rule_id": "SV-220840r569187",
                    "rule_id_src": "SV-220840r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000230",
                    "group_title": "Users must not be allowed to ignore Windows Defender SmartScreen filter warnings for malicious websites in Microsoft Edge.",
                    "rule_title": "Users must not be allowed to ignore Windows Defender SmartScreen filter warnings for malicious websites in Microsoft Edge.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Microsoft Edge >> \"Prevent bypassing Windows Defender SmartScreen prompts for sites\" to \"Enabled\". \n\nWindows 10 includes duplicate policies for this setting. It can also be configured under Computer Configuration >> Administrative Templates >> Windows Components >> Windows Defender SmartScreen >> Microsoft Edge.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The Windows Defender SmartScreen filter in Microsoft Edge provides warning messages and blocks potentially malicious websites and file downloads.  If users are allowed to ignore warnings from the Windows Defender SmartScreen filter they could still access malicious websites.",
                    "check_content": "This is applicable to unclassified systems, for other systems this is NA.\n\nWindows 10 LTSC\\B versions do not include Microsoft Edge, this is NA for those systems.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\MicrosoftEdge\\PhishingFilter\\\n\nValue Name: PreventOverride\n\nType: REG_DWORD\nValue: 0x00000001 (1)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63699",
                        "SV-78189"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220840",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "735138c7-7f25-4731-9195-ccc069be74e4",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220841",
                    "rule_id": "SV-220841r569187",
                    "rule_id_src": "SV-220841r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000235",
                    "group_title": "Users must not be allowed to ignore Windows Defender SmartScreen filter warnings for unverified files in Microsoft Edge.",
                    "rule_title": "Users must not be allowed to ignore Windows Defender SmartScreen filter warnings for unverified files in Microsoft Edge.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Microsoft Edge >> \"Prevent bypassing Windows Defender SmartScreen prompts for files\" to \"Enabled\". \n\nWindows 10 includes duplicate policies for this setting. It can also be configured under Computer Configuration >> Administrative Templates >> Windows Components >> Windows Defender SmartScreen >> Microsoft Edge.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The Windows Defender SmartScreen filter in Microsoft Edge provides warning messages and blocks potentially malicious websites and file downloads.  If users are allowed to ignore warnings from the Windows Defender SmartScreen filter they could still download potentially malicious files.",
                    "check_content": "This is applicable to unclassified systems, for other systems this is NA.\n\nWindows 10 LTSC\\B versions do not include Microsoft Edge, this is NA for those systems.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\MicrosoftEdge\\PhishingFilter\\\n\nValue Name: PreventOverrideAppRepUnknown\n\nType: REG_DWORD\nValue: 0x00000001 (1)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78191",
                        "V-63701"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220841",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "f00fb294-8041-449e-a210-b49aa814aef9",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220842",
                    "rule_id": "SV-220842r569187",
                    "rule_id_src": "SV-220842r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000238",
                    "group_title": "Windows 10 must be configured to prevent certificate error overrides in Microsoft Edge.",
                    "rule_title": "Windows 10 must be configured to prevent certificate error overrides in Microsoft Edge.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Microsoft Edge >> \"Prevent certificate error overrides\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Web security certificates provide an indication whether a site is legitimate. This policy setting prevents the user from ignoring Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate errors that interrupt browsing.",
                    "check_content": "This setting is applicable starting with v1809 of Windows 10; it is NA for prior versions.\n\nWindows 10 LTSC\\B versions do not include Microsoft Edge; this is NA for those systems.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\MicrosoftEdge\\Internet Settings\\\n\nValue Name: PreventCertErrorOverrides\n\nType: REG_DWORD\nValue: 0x00000001 (1)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-96853",
                        "V-82139"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220842",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "814c60e1-ed69-4c41-9384-abc5849418e9",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220843",
                    "rule_id": "SV-220843r569187",
                    "rule_id_src": "SV-220843r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000245",
                    "group_title": "The password manager function in the Edge browser must be disabled.",
                    "rule_title": "The password manager function in the Edge browser must be disabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Microsoft Edge >> \"Configure Password Manager\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Passwords save locally for re-use when browsing may be subject to compromise.  Disabling the Edge password manager will prevent this for the browser.",
                    "check_content": "Windows 10 LTSC\\B versions do not include Microsoft Edge, this is NA for those systems.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\MicrosoftEdge\\Main\\\n\nValue Name: FormSuggest Passwords\n\nType: REG_SZ\nValue: no",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63709",
                        "SV-78199"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220843",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "4798a61d-aab5-4e07-839c-7836a1b60459",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220844",
                    "rule_id": "SV-220844r569187",
                    "rule_id_src": "SV-220844r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000250",
                    "group_title": "The Windows Defender SmartScreen filter for Microsoft Edge must be enabled.",
                    "rule_title": "The Windows Defender SmartScreen filter for Microsoft Edge must be enabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Microsoft Edge >> \"Configure Windows Defender SmartScreen\" to \"Enabled\". \n\nWindows 10 includes duplicate policies for this setting. It can also be configured under Computer Configuration >> Administrative Templates >> Windows Components >> Windows Defender SmartScreen >> Microsoft Edge.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The Windows Defender SmartScreen filter in Microsoft Edge provides warning messages and blocks potentially malicious websites.",
                    "check_content": "This is applicable to unclassified systems, for other systems this is NA.\n\nWindows 10 LTSC\\B versions do not include Microsoft Edge, this is NA for those systems.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\MicrosoftEdge\\PhishingFilter\\\n\nValue Name: EnabledV9\n\nType: REG_DWORD\nValue: 0x00000001 (1)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78203",
                        "V-63713"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220844",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "87f0c9c5-206b-4d42-b465-d0fc4d72eeda",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220845",
                    "rule_id": "SV-220845r569187",
                    "rule_id_src": "SV-220845r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000252",
                    "group_title": "Windows 10 must be configured to disable Windows Game Recording and Broadcasting.",
                    "rule_title": "Windows 10 must be configured to disable Windows Game Recording and Broadcasting.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Windows Game Recording and Broadcasting >> \"Enables or disables Windows Game Recording and Broadcasting\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Windows Game Recording and Broadcasting is intended for use with games, however it could potentially record screen shots of other applications and expose sensitive data.  Disabling the feature will prevent this from occurring.",
                    "check_content": "This is NA for Windows 10 LTSC\\B versions 1507 and 1607.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\GameDVR\\\n\nValue Name: AllowGameDVR\n\nType: REG_DWORD\nValue: 0x00000000 (0)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-89091",
                        "V-74417"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220845",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "d593f405-3ed7-4832-b3a1-46d62abf8550",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220846",
                    "rule_id": "SV-220846r569187",
                    "rule_id_src": "SV-220846r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000255",
                    "group_title": "The use of a hardware security device with Windows Hello for Business must be enabled.",
                    "rule_title": "The use of a hardware security device with Windows Hello for Business must be enabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Windows Hello for Business >> \"Use a hardware security device\" to \"Enabled\". \n\nv1507 LTSB:\nThe policy path is Computer Configuration >> Administrative Templates >> Windows Components >> Microsoft Passport for Work.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The use of a Trusted Platform Module (TPM) to store keys for Windows Hello for Business provides additional security.  Keys stored in the TPM may only be used on that system while keys stored using software are more susceptible to compromise and could be used on other systems.",
                    "check_content": "Virtual desktop implementations currently may not support the use of TPMs. For virtual desktop implementations where the virtual desktop instance is deleted or refreshed upon logoff, this is NA.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\PassportForWork\\\n\nValue Name: RequireSecurityDevice\n\nType: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78207",
                        "V-63717"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220846",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "a817e698-b6d8-48d4-a757-b0db45afc20c",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220847",
                    "rule_id": "SV-220847r569187",
                    "rule_id_src": "SV-220847r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000260",
                    "group_title": "Windows 10 must be configured to require a minimum pin length of six characters or greater.",
                    "rule_title": "Windows 10 must be configured to require a minimum pin length of six characters or greater.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> System >> PIN Complexity >> \"Minimum PIN length\" to \"6\" or greater. \n\nv1607 LTSB:\nThe policy path is Computer Configuration >> Administrative Templates >> Windows Components >> Windows Hello for Business >> Pin Complexity.\n\nv1507 LTSB:\nThe policy path is Computer Configuration >> Administrative Templates >> Windows Components >> Microsoft Passport for Work >> Pin Complexity.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Windows allows the use of PINs as well as biometrics for authentication without sending a password to a network or website where it could be compromised.  Longer minimum PIN lengths increase the available combinations an attacker would have to attempt.  Shorter minimum length significantly reduces the strength.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive:  HKEY_LOCAL_MACHINE\nRegistry Path:  \\SOFTWARE\\Policies\\Microsoft\\PassportForWork\\PINComplexity\\\n\nValue Name:  MinimumPINLength\n\nType:  REG_DWORD\nValue:  6 (or greater)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78211",
                        "V-63721"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220847",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "0f0b1080-74f8-4f23-a7be-0ebe91c999d0",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220848",
                    "rule_id": "SV-220848r851994",
                    "rule_id_src": "SV-220848r851994_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000270",
                    "group_title": "Passwords must not be saved in the Remote Desktop Client.",
                    "rule_title": "Passwords must not be saved in the Remote Desktop Client.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Remote Desktop Services >> Remote Desktop Connection Client >> \"Do not allow passwords to be saved\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Saving passwords in the Remote Desktop Client could allow an unauthorized user to establish a remote desktop session to another system.  The system must be configured to prevent users from saving passwords in the Remote Desktop Client.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows NT\\Terminal Services\\\n\nValue Name: DisablePasswordSaving\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63729",
                        "SV-78219"
                    ],
                    "ccis": [
                        "CCI-002038"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220848",
                            "title": "SRG-OS-000373-GPOS-00156",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "0987eeb9-d071-4011-92b1-8772fa4fa712",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220849",
                    "rule_id": "SV-220849r569187",
                    "rule_id_src": "SV-220849r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000275",
                    "group_title": "Local drives must be prevented from sharing with Remote Desktop Session Hosts.",
                    "rule_title": "Local drives must be prevented from sharing with Remote Desktop Session Hosts.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Remote Desktop Services >> Remote Desktop Session Host >> Device and Resource Redirection >> \"Do not allow drive redirection\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Preventing users from sharing the local drives on their client computers to Remote Session Hosts that they access helps reduce possible exposure of sensitive data.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows NT\\Terminal Services\\\n\nValue Name: fDisableCdm\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78221",
                        "V-63731"
                    ],
                    "ccis": [
                        "CCI-001090"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220849",
                            "title": "SRG-OS-000138-GPOS-00069",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "3aa970ec-869f-4912-93c1-151c9e2f8e8b",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220850",
                    "rule_id": "SV-220850r851995",
                    "rule_id_src": "SV-220850r851995_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000280",
                    "group_title": "Remote Desktop Services must always prompt a client for passwords upon connection.",
                    "rule_title": "Remote Desktop Services must always prompt a client for passwords upon connection.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Remote Desktop Services >> Remote Desktop Session Host >> Security >> \"Always prompt for password upon connection\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "This setting controls the ability of users to supply passwords automatically as part of their remote desktop connection.  Disabling this setting would allow anyone to use the stored credentials in a connection item to connect to the terminal server.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows NT\\Terminal Services\\\n\nValue Name: fPromptForPassword\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78223",
                        "V-63733"
                    ],
                    "ccis": [
                        "CCI-002038"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220850",
                            "title": "SRG-OS-000373-GPOS-00156",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "6b5d6f5b-47e9-4514-9205-c0888df6983f",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220851",
                    "rule_id": "SV-220851r877394",
                    "rule_id_src": "SV-220851r877394_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000285",
                    "group_title": "The Remote Desktop Session Host must require secure RPC communications.",
                    "rule_title": "The Remote Desktop Session Host must require secure RPC communications.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Remote Desktop Services >> Remote Desktop Session Host >> Security \"Require secure RPC communication\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Allowing unsecure RPC communication exposes the system to man in the middle attacks and data disclosure attacks. A man in the middle attack occurs when an intruder captures packets between a client and server and modifies them before allowing the packets to be exchanged. Usually the attacker will modify the information in the packets in an attempt to cause either the client or server to reveal sensitive information.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows NT\\Terminal Services\\\n\nValue Name: fEncryptRPCTraffic\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63737",
                        "SV-78227"
                    ],
                    "ccis": [
                        "CCI-001453"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220851",
                            "title": "SRG-OS-000250-GPOS-00093",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "9d155c27-d43a-47f0-90ab-01cc95b97973",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220852",
                    "rule_id": "SV-220852r877398",
                    "rule_id_src": "SV-220852r877398_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000290",
                    "group_title": "Remote Desktop Services must be configured with the client connection encryption set to the required level.",
                    "rule_title": "Remote Desktop Services must be configured with the client connection encryption set to the required level.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Remote Desktop Services >> Remote Desktop Session Host >> Security >> \"Set client connection encryption level\" to \"Enabled\" and \"High Level\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Remote connections must be encrypted to prevent interception of data or sensitive information. Selecting \"High Level\" will ensure encryption of Remote Desktop Services sessions in both directions.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows NT\\Terminal Services\\\n\nValue Name: MinEncryptionLevel\n\nValue Type: REG_DWORD\nValue: 3",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63741",
                        "SV-78231"
                    ],
                    "ccis": [
                        "CCI-000068",
                        "CCI-002890"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220852",
                            "title": "SRG-OS-000033-GPOS-00014",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "635c0e0d-63f4-4079-90c5-534ae7ff9cbc",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220853",
                    "rule_id": "SV-220853r569187",
                    "rule_id_src": "SV-220853r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000295",
                    "group_title": "Attachments must be prevented from being downloaded from RSS feeds.",
                    "rule_title": "Attachments must be prevented from being downloaded from RSS feeds.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> RSS Feeds >> \"Prevent downloading of enclosures\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Attachments from RSS feeds may not be secure.  This setting will prevent attachments from being downloaded from RSS feeds.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Internet Explorer\\Feeds\\\n\nValue Name: DisableEnclosureDownload\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78233",
                        "V-63743"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220853",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "b7064aaf-a04b-4015-9963-43555352ed25",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220854",
                    "rule_id": "SV-220854r569187",
                    "rule_id_src": "SV-220854r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000300",
                    "group_title": "Basic authentication for RSS feeds over HTTP must not be used.",
                    "rule_title": "Basic authentication for RSS feeds over HTTP must not be used.",
                    "fix_text": "The default behavior is for the Windows RSS platform to not use Basic authentication over HTTP connections.\n\nIf this needs to be corrected, configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> RSS Feeds >> \"Turn on Basic feed authentication over HTTP\" to \"Not Configured\" or \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Basic authentication uses plain text passwords that could be used to compromise a system.",
                    "check_content": "The default behavior is for the Windows RSS platform to not use Basic authentication over HTTP connections.\n\nIf the registry value name below does not exist, this is not a finding.\n\nIf it exists and is configured with a value of \"0\", this is not a finding.\n\nIf it exists and is configured with a value of \"1\", this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Internet Explorer\\Feeds\\\n\nValue Name: AllowBasicAuthInClear\n\nValue Type: REG_DWORD\nValue: 0 (or if the Value Name does not exist)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78237",
                        "V-63747"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220854",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "48dd6dff-ddb9-454d-8c5a-4118a0268e24",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220855",
                    "rule_id": "SV-220855r569187",
                    "rule_id_src": "SV-220855r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000305",
                    "group_title": "Indexing of encrypted files must be turned off.",
                    "rule_title": "Indexing of encrypted files must be turned off.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Search >> \"Allow indexing of encrypted files\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Indexing of encrypted files may expose sensitive data.  This setting prevents encrypted files from being indexed.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search\\\n\nValue Name: AllowIndexingEncryptedStoresOrItems\n\nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63751",
                        "SV-78241"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220855",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "cd3d158d-bc6a-4fd8-af1f-d77a5c2f5ea8",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220856",
                    "rule_id": "SV-220856r851997",
                    "rule_id_src": "SV-220856r851997_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000310",
                    "group_title": "Users must be prevented from changing installation options.",
                    "rule_title": "Users must be prevented from changing installation options.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Windows Installer >> \"Allow user control over installs\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Installation options for applications are typically controlled by administrators.  This setting prevents users from changing installation options that may bypass security features.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer\\\n\nValue Name: EnableUserControl\n\nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63321",
                        "SV-77811"
                    ],
                    "ccis": [
                        "CCI-001812"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220856",
                            "title": "SRG-OS-000362-GPOS-00149",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "ad023790-5a75-4c54-b746-bf830e0ffcd2",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220857",
                    "rule_id": "SV-220857r851998",
                    "rule_id_src": "SV-220857r851998_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-CC-000315",
                    "group_title": "The Windows Installer Always install with elevated privileges must be disabled.",
                    "rule_title": "The Windows Installer Always install with elevated privileges must be disabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Windows Installer >> \"Always install with elevated privileges\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Standard user accounts must not be granted elevated privileges.  Enabling Windows Installer to elevate privileges when installing applications can allow malicious persons and applications to gain full control of a system.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer\\\n\nValue Name: AlwaysInstallElevated\n\nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63325",
                        "SV-77815"
                    ],
                    "ccis": [
                        "CCI-001812"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220857",
                            "title": "SRG-OS-000362-GPOS-00149",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "52238c48-61d7-4d04-824f-4616f999e512",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220858",
                    "rule_id": "SV-220858r569187",
                    "rule_id_src": "SV-220858r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000320",
                    "group_title": "Users must be notified if a web-based program attempts to install software.",
                    "rule_title": "Users must be notified if a web-based program attempts to install software.",
                    "fix_text": "The default behavior is for Internet Explorer to warn users and select whether to allow or refuse installation when a web-based program attempts to install software on the system.\n\nIf this needs to be corrected, configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Windows Installer >> \"Prevent Internet Explorer security prompt for Windows Installer scripts\" to \"Not Configured\" or \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Web-based programs may attempt to install malicious software on a system.  Ensuring users are notified if a web-based program attempts to install software allows them to refuse the installation.",
                    "check_content": "The default behavior is for Internet Explorer to warn users and select whether to allow or refuse installation when a web-based program attempts to install software on the system.\n\nIf the registry value name below does not exist, this is not a finding.\n\nIf it exists and is configured with a value of \"0\", this is not a finding.\n\nIf it exists and is configured with a value of \"1\", this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer\\\n\nValue Name: SafeForScripting\n\nValue Type: REG_DWORD\nValue: 0 (or if the Value Name does not exist)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63329",
                        "SV-77819"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220858",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "771b953c-976d-42d7-8151-84476003d08c",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220859",
                    "rule_id": "SV-220859r877377",
                    "rule_id_src": "SV-220859r877377_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000325",
                    "group_title": "Automatically signing in the last interactive user after a system-initiated restart must be disabled.",
                    "rule_title": "Automatically signing in the last interactive user after a system-initiated restart must be disabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Windows Logon Options >> \"Sign-in last interactive user automatically after a system-initiated restart\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Windows can be configured to automatically sign the user back in after a Windows Update restart.  Some protections are in place to help ensure this is done in a secure fashion; however, disabling this will prevent the caching of credentials for this purpose and also ensure the user is aware of the restart.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\\n\nValue Name: DisableAutomaticRestartSignOn\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77823",
                        "V-63333"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220859",
                            "title": "SRG-OS-000480-GPOS-00229",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "9ede4a46-f24e-49b9-a4a9-dd44cc1c1f80",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220860",
                    "rule_id": "SV-220860r569187",
                    "rule_id_src": "SV-220860r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000326",
                    "group_title": "PowerShell script block logging must be enabled on Windows 10.",
                    "rule_title": "PowerShell script block logging must be enabled on Windows 10.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Windows PowerShell >> \"Turn on PowerShell Script Block Logging\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nEnabling PowerShell script block logging will record detailed information from the processing of PowerShell commands and scripts.  This can provide additional detail when malware has run on a system.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE \nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\PowerShell\\ScriptBlockLogging\\\n\nValue Name: EnableScriptBlockLogging\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-68819",
                        "SV-83411"
                    ],
                    "ccis": [
                        "CCI-000135"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220860",
                            "title": "SRG-OS-000042-GPOS-00020",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "e9e33a72-d64a-409e-954f-5689d11c88dd",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220861",
                    "rule_id": "SV-220861r877377",
                    "rule_id_src": "SV-220861r877377_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000328",
                    "group_title": "The Windows Explorer Preview pane must be disabled for Windows 10. ",
                    "rule_title": "The Windows Explorer Preview pane must be disabled for Windows 10. ",
                    "fix_text": "Ensure the following settings are configured for Windows 10 locally or applied through group policy. \r\n\r\nConfigure the policy value for User Configuration >> Administrative Templates >> Windows Components >> File Explorer >> Explorer Frame Pane \"Turn off Preview Pane\" to \"Enabled\".\r\n\r\nConfigure the policy value for User Configuration >> Administrative Templates >> Windows Components >> File Explorer >> Explorer Frame Pane \"Turn on or off details pane\" to \"Enabled\" and \"Configure details pane\" to \"Always hide\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "A known vulnerability in Windows 10 could allow the execution of malicious code by either opening a compromised document or viewing it in the Windows Preview pane.\r\n\r\nOrganizations must disable the Windows Preview pane and Windows Detail pane.",
                    "check_content": "If the following registry values do not exist or are not configured as specified, this is a finding:\r\n\r\nRegistry Hive: HKEY_CURRENT_USER\r\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\Explorer\r\n\r\nValue Name: NoPreviewPane\r\n\r\nValue Type: REG_DWORD\r\n\r\nValue: 1\r\n\r\nRegistry Hive: HKEY_CURRENT_USER\r\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\Explorer\r\n\r\nValue Name: NoReadingPane\r\n\r\nValue Type: REG_DWORD\r\n\r\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-111563",
                        "V-102617"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220861",
                            "title": "SRG-OS-000480-GPOS-00229",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "f58a82c5-26de-4e2d-9a2d-dcf8003bdd4b",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220862",
                    "rule_id": "SV-220862r877395",
                    "rule_id_src": "SV-220862r877395_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-CC-000330",
                    "group_title": "The Windows Remote Management (WinRM) client must not use Basic authentication.",
                    "rule_title": "The Windows Remote Management (WinRM) client must not use Basic authentication.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Windows Remote Management (WinRM) >> WinRM Client >> \"Allow Basic authentication\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Basic authentication uses plain text passwords that could be used to compromise a system.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\WinRM\\Client\\\n\nValue Name: AllowBasic\n\nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63335",
                        "SV-77825"
                    ],
                    "ccis": [
                        "CCI-000877"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220862",
                            "title": "SRG-OS-000125-GPOS-00065",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "28911255-8929-4b03-b0fb-a10a4d10536b",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220863",
                    "rule_id": "SV-220863r877382",
                    "rule_id_src": "SV-220863r877382_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000335",
                    "group_title": "The Windows Remote Management (WinRM) client must not allow unencrypted traffic.",
                    "rule_title": "The Windows Remote Management (WinRM) client must not allow unencrypted traffic.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Windows Remote Management (WinRM) >> WinRM Client >> \"Allow unencrypted traffic\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Unencrypted remote access to a system can allow sensitive information to be compromised.  Windows remote management connections must be encrypted to prevent this.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\WinRM\\Client\\\n\nValue Name: AllowUnencryptedTraffic\n\nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77829",
                        "V-63339"
                    ],
                    "ccis": [
                        "CCI-002890",
                        "CCI-003123"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220863",
                            "title": "SRG-OS-000393-GPOS-00173",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "f89f8a76-2559-46fc-92dd-6278b446312c",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220865",
                    "rule_id": "SV-220865r877395",
                    "rule_id_src": "SV-220865r877395_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-CC-000345",
                    "group_title": "The Windows Remote Management (WinRM) service must not use Basic authentication.",
                    "rule_title": "The Windows Remote Management (WinRM) service must not use Basic authentication.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Windows Remote Management (WinRM) >> WinRM Service >> \"Allow Basic authentication\" to \"Disabled\".\r\n\r\nSeverity Override Guidance: The AO can allow the severity override if they have reviewed the overall protection. This would only be allowed temporarily for implementation as documented and approved. \r\n….\r\nAllowing Basic authentication to be used for the sole creation of Office 365 DoD tenants.\r\n….\r\nA documented mechanism and or script that can disable Basic authentication once administration completes. \r\n….\r\nUse of a Privileged Access Workstation (PAW) and adherence to the Clean Source principle for administration.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Basic authentication uses plain text passwords that could be used to compromise a system.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\WinRM\\Service\\\n\nValue Name: AllowBasic\n\nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-77837",
                        "V-63347"
                    ],
                    "ccis": [
                        "CCI-000877"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220865",
                            "title": "SRG-OS-000125-GPOS-00065",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "e9a1575d-527a-4b43-afc7-949051611c0c",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220866",
                    "rule_id": "SV-220866r877382",
                    "rule_id_src": "SV-220866r877382_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000350",
                    "group_title": "The Windows Remote Management (WinRM) service must not allow unencrypted traffic.",
                    "rule_title": "The Windows Remote Management (WinRM) service must not allow unencrypted traffic.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Windows Remote Management (WinRM) >> WinRM Service >> \"Allow unencrypted traffic\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Unencrypted remote access to a system can allow sensitive information to be compromised.  Windows remote management connections must be encrypted to prevent this.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\WinRM\\Service\\\n\nValue Name: AllowUnencryptedTraffic\n\nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63369",
                        "SV-77859"
                    ],
                    "ccis": [
                        "CCI-002890",
                        "CCI-003123"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220866",
                            "title": "SRG-OS-000393-GPOS-00173",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "f8fa1a07-153e-4e7b-93b7-0d9fe308ae3d",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220867",
                    "rule_id": "SV-220867r852001",
                    "rule_id_src": "SV-220867r852001_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000355",
                    "group_title": "The Windows Remote Management (WinRM) service must not store RunAs credentials.",
                    "rule_title": "The Windows Remote Management (WinRM) service must not store RunAs credentials.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Windows Remote Management (WinRM) >> WinRM Service >> \"Disallow WinRM from storing RunAs credentials\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Storage of administrative credentials could allow unauthorized access.  Disallowing the storage of RunAs credentials for Windows Remote Management will prevent them from being used with plug-ins.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\WinRM\\Service\\\n\nValue Name: DisableRunAs\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63375",
                        "SV-77865"
                    ],
                    "ccis": [
                        "CCI-002038"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220867",
                            "title": "SRG-OS-000373-GPOS-00156",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "097f303c-3ddd-47a2-9425-88c2a2dceb79",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220868",
                    "rule_id": "SV-220868r877395",
                    "rule_id_src": "SV-220868r877395_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000360",
                    "group_title": "The Windows Remote Management (WinRM) client must not use Digest authentication.",
                    "rule_title": "The Windows Remote Management (WinRM) client must not use Digest authentication.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Windows Remote Management (WinRM) >> WinRM Client >> \"Disallow Digest authentication\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Digest authentication is not as strong as other options and may be subject to man-in-the-middle attacks.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\WinRM\\Client\\\n\nValue Name: AllowDigest\n\nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63341",
                        "SV-77831"
                    ],
                    "ccis": [
                        "CCI-000877"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220868",
                            "title": "SRG-OS-000125-GPOS-00065",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "86b7269e-9c27-412b-99eb-5b84f6d3bc1f",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220869",
                    "rule_id": "SV-220869r569187",
                    "rule_id_src": "SV-220869r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000365",
                    "group_title": "Windows 10 must be configured to prevent Windows apps from being activated by voice while the system is locked.",
                    "rule_title": "Windows 10 must be configured to prevent Windows apps from being activated by voice while the system is locked.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> App Privacy >> \"Let Windows apps activate with voice while the system is locked\" to \"Enabled\" with “Default for all Apps:” set to “Force Deny”. \n\nThe requirement is NA if the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> App Privacy >> \"Let Windows apps activate with voice\" is configured to \"Enabled\" with “Default for all Apps:” set to “Force Deny”.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Allowing Windows apps to be activated by voice from the lock screen could allow for unauthorized use. Requiring logon will ensure the apps are only used by authorized personnel.",
                    "check_content": "This setting requires v1903 or later of Windows 10; it is NA for prior versions.  The setting is NA when the “Allow voice activation” policy is configured to disallow applications to be activated with voice for all users.\nIf the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\AppPrivacy\\\n\nValue Name: LetAppsActivateWithVoiceAboveLock\n\nType: REG_DWORD\nValue: 0x00000002 (2)\n\nIf the following registry value exists and is configured as specified, requirement is NA. \n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\AppPrivacy\\\n\nValue Name: LetAppsActivateWithVoice\n\nType: REG_DWORD\nValue: 0x00000002 (2)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-94719",
                        "SV-104549"
                    ],
                    "ccis": [
                        "CCI-000056"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220869",
                            "title": "SRG-OS-000028-GPOS-00009",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "e790f52f-e632-4c1d-acc1-9fb9abca3dda",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220870",
                    "rule_id": "SV-220870r569187",
                    "rule_id_src": "SV-220870r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000370",
                    "group_title": "The convenience PIN for Windows 10 must be disabled.  ",
                    "rule_title": "The convenience PIN for Windows 10 must be disabled.  ",
                    "fix_text": "Disable the convenience PIN sign-in. \n\nIf this needs to be corrected configure the policy value for Computer Configuration >> Administrative Templates >> System >> Logon >> Set \"Turn on convenience PIN sign-in\" to \"Disabled”.\n",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "This policy controls whether a domain user can sign in using a convenience PIN to prevent enabling (Password Stuffer).",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\Software\\Policies\\Microsoft\\Windows\\System\n\nValue Name: AllowDomainPINLogon\nValue Type: REG_DWORD\nValue data: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-99559",
                        "SV-108663"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220870",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "35b39503-df4b-4d99-8cf8-578b811ee3e3",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220871",
                    "rule_id": "SV-220871r642141",
                    "rule_id_src": "SV-220871r642141_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000385",
                    "group_title": "Windows Ink Workspace must be configured to disallow access above the lock.  ",
                    "rule_title": "Windows Ink Workspace must be configured to disallow access above the lock.  ",
                    "fix_text": "Disable the convenience PIN sign-in. \r\n\r\nIf this needs to be corrected, configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Windows Ink Workspace >> Set \"Allow Windows Ink Workspace\" to \"Enabled” and set Options \"On, but disallow access above lock\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "This action secures Windows Ink, which contains applications and features oriented toward pen computing.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding.\r\n\r\nRegistry Hive: HKEY_LOCAL_MACHINE\r\nRegistry Path: \\Software\\Policies\\Microsoft\\WindowsInkWorkspace\r\n\r\nValue Name: AllowWindowsInkWorkspace\r\nValue Type: REG_DWORD\r\nValue data: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-108665",
                        "V-99561"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220871",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "4203f30d-d1a2-4766-b78a-95edb571cd38",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220872",
                    "rule_id": "SV-220872r569187",
                    "rule_id_src": "SV-220872r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-CC-000390",
                    "group_title": "Windows 10 should be configured to prevent users from receiving suggestions for third-party or additional applications. ",
                    "rule_title": "Windows 10 should be configured to prevent users from receiving suggestions for third-party or additional applications. ",
                    "fix_text": "Configure the policy value for User Configuration >> Administrative Templates >> Windows Components >> Cloud Content >> \"Do not suggest third-party content in Windows spotlight\" to \"Enabled",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Windows spotlight features may suggest apps and content from third-party software publishers in addition to Microsoft apps and content. ",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding: \n\nRegistry Hive: HKEY_CURRENT_USER\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\CloudContent\\\n\nValue Name: DisableThirdPartySuggestions\n\nType: REG_DWORD\nValue: 0x00000001 (1)\n\n",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-99563",
                        "SV-108667"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220872",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "e320eb25-13e5-4158-b920-1064aa245ce3",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220902",
                    "rule_id": "SV-220902r569187",
                    "rule_id_src": "SV-220902r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-EP-000310",
                    "group_title": "Windows 10 Kernel (Direct Memory Access) DMA Protection must be enabled.",
                    "rule_title": "Windows 10 Kernel (Direct Memory Access) DMA Protection must be enabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> System >> Kernel DMA Protection >> \"Enumeration policy for external devices incompatible with Kernel DMA Protection\" to \"Enabled\" with \"Enumeration Policy\" set to \"Block All\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Kernel DMA Protection to protect PCs against drive-by Direct Memory Access (DMA) attacks using PCI hot plug devices connected to Thunderbolt™ 3 ports. Drive-by DMA attacks can lead to disclosure of sensitive information residing on a PC, or even injection of malware that allows attackers to bypass the lock screen or control PCs remotely.",
                    "check_content": "This is NA prior to v1803 of Windows 10.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\Software\\Policies\\Microsoft\\Windows\\Kernel DMA Protection\n\nValue Name: DeviceEnumerationPolicy\nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-108661",
                        "V-99557"
                    ],
                    "ccis": [
                        "CCI-001090"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220902",
                            "title": "SRG-OS-000138-GPOS-00069",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "717827d0-b1cd-42aa-a69d-ecb5d7d69371",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220903",
                    "rule_id": "SV-220903r894651",
                    "rule_id_src": "SV-220903r894651_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-PK-000005",
                    "group_title": "The DoD Root CA certificates must be installed in the Trusted Root Store.",
                    "rule_title": "The DoD Root CA certificates must be installed in the Trusted Root Store.",
                    "fix_text": "Install the DoD Root CA certificates:\nDoD Root CA 3\nDoD Root CA 4\nDoD Root CA 5\n\nThe InstallRoot tool is available on Cyber Exchange at https://cyber.mil/pki-pke/tools-configuration-files. Certificate bundles published by the PKI can be found at https://crl.gds.disa.mil/.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "To ensure secure DoD websites and DoD-signed code are properly validated, the system must trust the DoD Root Certificate Authorities (CAs). The DoD root certificates will ensure the trust chain is established for server certificates issued from the DoD CAs.",
                    "check_content": "Verify the DoD Root CA certificates are installed as Trusted Root Certification Authorities.\r\n\r\nThe certificates and thumbprints referenced below apply to unclassified systems; refer to PKE documentation for other networks.\r\n\r\nRun \"PowerShell\" as an administrator.\r\n\r\nExecute the following command:\r\n\r\nGet-ChildItem -Path Cert:Localmachine\\root | Where Subject -Like \"*DoD*\" | FL Subject, Thumbprint, NotAfter\r\n\r\nIf the following certificate \"Subject\" and \"Thumbprint\" information is not displayed, this is a finding.\r\n\r\nSubject: CN=DoD Root CA 3, OU=PKI, OU=DoD, O=U.S. Government, C=US\r\nThumbprint: D73CA91102A2204A36459ED32213B467D7CE97FB\r\nNotAfter: 12/30/2029\r\n\r\nSubject: CN=DoD Root CA 4, OU=PKI, OU=DoD, O=U.S. Government, C=US\r\nThumbprint: B8269F25DBD937ECAFD4C35A9838571723F2D026\r\nNotAfter: 7/25/2032\r\n\r\nSubject: CN=DoD Root CA 5, OU=PKI, OU=DoD, O=U.S. Government, C=US\r\nThumbprint: 4ECB5CC3095670454DA1CBD410FC921F46B8564B\r\nNotAfter: 6/14/2041\r\n\r\nAlternately, use the Certificates MMC snap-in:\r\n\r\nRun \"MMC\".\r\n\r\nSelect \"File\", \"Add/Remove Snap-in\".\r\n\r\nSelect \"Certificates\", click \"Add\".\r\n\r\nSelect \"Computer account\", click \"Next\".\r\n\r\nSelect \"Local computer: (the computer this console is running on)\", click \"Finish\".\r\n\r\nClick \"OK\".\r\n\r\nExpand \"Certificates\" and navigate to \"Trusted Root Certification Authorities >> Certificates\".\r\n\r\nFor each of the DoD Root CA certificates noted below:\r\n\r\nRight-click on the certificate and select \"Open\".\r\n\r\nSelect the \"Details\" tab.\r\n\r\nScroll to the bottom and select \"Thumbprint\".\r\n\r\nIf the DoD Root CA certificates below are not listed or the value for the \"Thumbprint\" field is not as noted, this is a finding.\r\n       \r\nDoD Root CA 3\r\nThumbprint: D73CA91102A2204A36459ED32213B467D7CE97FB\r\nValid to: Sunday, December 30, 2029\r\n\r\nDoD Root CA 4\r\nThumbprint: B8269F25DBD937ECAFD4C35A9838571723F2D026\r\nValid to: Sunday, July 25, 2032\r\n\r\nDoD Root CA 5\r\nThumbprint: 4ECB5CC3095670454DA1CBD410FC921F46B8564B\r\nValid to: Friday, June 14, 2041",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63579",
                        "SV-78069"
                    ],
                    "ccis": [
                        "CCI-000185",
                        "CCI-002470"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220903",
                            "title": "SRG-OS-000066-GPOS-00034",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "455e8477-d288-4d93-b212-205348220aaa",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220904",
                    "rule_id": "SV-220904r894652",
                    "rule_id_src": "SV-220904r894652_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-PK-000010",
                    "group_title": "The External Root CA certificates must be installed in the Trusted Root Store on unclassified systems.",
                    "rule_title": "The External Root CA certificates must be installed in the Trusted Root Store on unclassified systems.",
                    "fix_text": "Install the ECA Root CA certificate on unclassified systems.\nECA Root CA 4\n\nThe InstallRoot tool is available on Cyber Exchange at https://cyber.mil/pki-pke/tools-configuration-files. Certificate bundles published by the PKI can be found at https://crl.gds.disa.mil/.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "To ensure secure websites protected with External Certificate Authority (ECA) server certificates are properly validated, the system must trust the ECA Root CAs. The ECA root certificates will ensure the trust chain is established for server certificates issued from the External CAs. This requirement only applies to unclassified systems.",
                    "check_content": "Verify the ECA Root CA certificates are installed on unclassified systems as Trusted Root Certification Authorities.\r\n\r\nRun \"PowerShell\" as an administrator.\r\n\r\nExecute the following command:\r\n\r\nGet-ChildItem -Path Cert:Localmachine\\root | Where Subject -Like \"*ECA*\" | FL Subject, Thumbprint, NotAfter\r\n\r\nIf the following certificate \"Subject\" and \"Thumbprint\" information is not displayed, this is a finding. \r\n\r\nSubject: CN=ECA Root CA 4, OU=ECA, O=U.S. Government, C=US\r\nThumbprint: 73E8BB08E337D6A5A6AEF90CFFDD97D9176CB582\r\nNotAfter: 12/30/2029\r\n\r\nAlternately use the Certificates MMC snap-in:\r\n\r\nRun \"MMC\".\r\n\r\nSelect \"File\", \"Add/Remove Snap-in\".\r\n\r\nSelect \"Certificates\", click \"Add\".\r\n\r\nSelect \"Computer account\", click \"Next\".\r\n\r\nSelect \"Local computer: (the computer this console is running on)\", click \"Finish\".\r\n\r\nClick \"OK\".\r\n\r\nExpand \"Certificates\" and navigate to \"Trusted Root Certification Authorities >> Certificates\".\r\n\r\nFor each of the ECA Root CA certificates noted below:\r\n\r\nRight-click on the certificate and select \"Open\".\r\n\r\nSelect the \"Details\" Tab.\r\n\r\nScroll to the bottom and select \"Thumbprint\".\r\n\r\nIf the ECA Root CA certificate below is not listed or the value for the \"Thumbprint\" field is not as noted, this is a finding.\r\n\r\nECA Root CA 4\r\nThumbprint: 73E8BB08E337D6A5A6AEF90CFFDD97D9176CB582\r\nValid to: Sunday, December 30, 2029",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63583",
                        "SV-78073"
                    ],
                    "ccis": [
                        "CCI-000185"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220904",
                            "title": "SRG-OS-000066-GPOS-00034",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "7aa239bf-21c1-44a2-ae47-24d543688d87",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220905",
                    "rule_id": "SV-220905r890436",
                    "rule_id_src": "SV-220905r890436_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-PK-000015",
                    "group_title": "The DoD Interoperability Root CA cross-certificates must be installed in the Untrusted Certificates Store on unclassified systems.",
                    "rule_title": "The DoD Interoperability Root CA cross-certificates must be installed in the Untrusted Certificates Store on unclassified systems.",
                    "fix_text": "Install the DoD Interoperability Root CA cross-certificates on unclassified systems.\n\nIssued To - Issued By - Thumbprint\n\nDoD Root CA 3 - DoD Interoperability Root CA 2 - 49CBE933151872E17C8EAE7F0ABA97FB610F6477 \n                  \nThe certificates can be installed using the InstallRoot tool. The tool and user guide are available on Cyber Exchange at https://cyber.mil/pki-pke/tools-configuration-files. PKI can be found at https://crl.gds.disa.mil/.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "To ensure users do not experience denial of service when performing certificate-based authentication to DoD websites due to the system chaining to a root other than DoD Root CAs, the DoD Interoperability Root CA cross-certificates must be installed in the Untrusted Certificate Store. This requirement only applies to unclassified systems.",
                    "check_content": "Verify the DoD Interoperability cross-certificates are installed on unclassified systems as Untrusted Certificates.\n\nRun \"PowerShell\" as an administrator.\n\nExecute the following command:\n\nGet-ChildItem -Path Cert:Localmachine\\disallowed | Where {$_.Issuer -Like \"*DoD Interoperability*\" -and $_.Subject -Like \"*DoD*\"} | FL Subject, Issuer, Thumbprint, NotAfter\n\nIf the following certificate \"Subject\", \"Issuer\", and \"Thumbprint\" information is not displayed, this is a finding.\n\nSubject: CN=DoD Root CA 3, OU=PKI, OU=DoD, O=U.S. Government, C=US\nIssuer: CN=DoD Interoperability Root CA 2, OU=PKI, OU=DoD, O=U.S. Government, C=US\nThumbprint: 49CBE933151872E17C8EAE7F0ABA97FB610F6477\nNotAfter: 11/16/2024 \n\nAlternately, use the Certificates MMC snap-in:\n\nRun \"MMC\".\n\nSelect \"File\", \"Add/Remove Snap-in\".\n\nSelect \"Certificates\", click \"Add\".\n\nSelect \"Computer account\", click \"Next\".\n\nSelect \"Local computer: (the computer this console is running on)\", click \"Finish\".\n\nClick \"OK\".\n\nExpand \"Certificates\" and navigate to Untrusted Certificates >> Certificates.\n\nFor each certificate with \"DoD Root CA…\" under \"Issued To\" and \"DoD Interoperability Root CA…\" under \"Issued By\":\n\nRight-click on the certificate and select \"Open\".\n\nSelect the \"Details\" tab.\n\nScroll to the bottom and select \"Thumbprint\".\n\nIf the certificates below are not listed or the value for the \"Thumbprint\" field is not as noted, this is a finding.\n\nIssued To: DoD Root CA 3\nIssued By: DoD Interoperability Root CA 2\nThumbprint: 49CBE933151872E17C8EAE7F0ABA97FB610F6477\nValid to: Wednesday, November 16, 2024",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63587",
                        "SV-78077"
                    ],
                    "ccis": [
                        "CCI-000185",
                        "CCI-002470"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220905",
                            "title": "SRG-OS-000066-GPOS-00034",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "ca11c643-3c16-49c8-bec9-3e1209d5fc77",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220906",
                    "rule_id": "SV-220906r890439",
                    "rule_id_src": "SV-220906r890439_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-PK-000020",
                    "group_title": "The US DoD CCEB Interoperability Root CA cross-certificates must be installed in the Untrusted Certificates Store on unclassified systems.",
                    "rule_title": "The US DoD CCEB Interoperability Root CA cross-certificates must be installed in the Untrusted Certificates Store on unclassified systems.",
                    "fix_text": "Install the US DoD CCEB Interoperability Root CA cross-certificate on unclassified systems.\n\nIssued To - Issued By - Thumbprint\nDoD Root CA 3 - US DoD CCEB Interoperability Root CA 2  9B74964506C7ED9138070D08D5F8B969866560C8\n\nThe certificates can be installed using the InstallRoot tool. The tool and user guide are available on Cyber Exchange at https://cyber.mil/pki-pke/tools-configuration-files. PKI can be found at https://crl.gds.disa.mil/.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "To ensure users do not experience denial of service when performing certificate-based authentication to DoD websites due to the system chaining to a root other than DoD Root CAs, the US DoD CCEB Interoperability Root CA cross-certificates must be installed in the Untrusted Certificate Store. This requirement only applies to unclassified systems.",
                    "check_content": "Verify the US DoD CCEB Interoperability Root CA cross-certificate is installed on unclassified systems as an Untrusted Certificate.\n\nRun \"PowerShell\" as an administrator.\n\nExecute the following command:\n\nGet-ChildItem -Path Cert:Localmachine\\disallowed | Where Issuer -Like \"*CCEB Interoperability*\" | FL Subject, Issuer, Thumbprint, NotAfter\n\nIf the following certificate \"Subject\", \"Issuer\", and \"Thumbprint\" information is not displayed, this is a finding. \n\nSubject: CN=DoD Root CA 3, OU=PKI, OU=DoD, O=U.S. Government, C=US\nIssuer: CN=US DoD CCEB Interoperability Root CA 2, OU=PKI, OU=DoD, O=U.S. Government, C=US\nThumbprint: 9B74964506C7ED9138070D08D5F8B969866560C8\nNotAfter: 7/18/2025 9:56:22 AM\n\nAlternately, use the Certificates MMC snap-in:\n\nRun \"MMC\".\n\nSelect \"File\", \"Add/Remove Snap-in\".\n\nSelect \"Certificates\", click \"Add\".\n\nSelect \"Computer account\", click \"Next\".\n\nSelect \"Local computer: (the computer this console is running on)\", click \"Finish\".\n\nClick \"OK\".\n\nExpand \"Certificates\" and navigate to Untrusted Certificates >> Certificates.\n\nFor each certificate with \"US DoD CCEB Interoperability Root CA …\" under \"Issued By\":\n\nRight-click on the certificate and select \"Open\".\n\nSelect the \"Details\" tab.\n\nScroll to the bottom and select \"Thumbprint\".\n\nIf the certificate below is not listed or the value for the \"Thumbprint\" field is not as noted, this is a finding.\n\nSubject: CN=DoD Root CA 3, OU=PKI, OU=DoD, O=U.S. Government, C=US\nIssuer: CN=US DoD CCEB Interoperability Root CA 2, OU=PKI, OU=DoD, O=U.S. Government, C=US\nThumbprint: 9B74964506C7ED9138070D08D5F8B969866560C8\nNotAfter: 7/18/2025 9:56:22 AM",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78079",
                        "V-63589"
                    ],
                    "ccis": [
                        "CCI-000185",
                        "CCI-002470"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220906",
                            "title": "SRG-OS-000066-GPOS-00034",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "93ef3fb5-d8ae-44ed-84af-402683cc5ef4",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220907",
                    "rule_id": "SV-220907r877392",
                    "rule_id_src": "SV-220907r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-RG-000005",
                    "group_title": "Default permissions for the HKEY_LOCAL_MACHINE registry hive must be maintained.",
                    "rule_title": "Default permissions for the HKEY_LOCAL_MACHINE registry hive must be maintained.",
                    "fix_text": "Maintain the default permissions for the HKEY_LOCAL_MACHINE registry hive.\n\nThe default permissions of the higher level keys are noted below.\n\nHKEY_LOCAL_MACHINE\\SECURITY\nType - \"Allow\" for all\nInherited from - \"None\" for all\nPrincipal - Access - Applies to\nSYSTEM - Full Control - This key and subkeys\nAdministrators - Special - This key and subkeys\n\nHKEY_LOCAL_MACHINE\\SOFTWARE\nType - \"Allow\" for all\nInherited from - \"None\" for all\nPrincipal - Access - Applies to\nUsers - Read - This key and subkeys\nAdministrators - Full Control - This key and subkeys\nSYSTEM - Full Control - This key and subkeys\nCREATOR OWNER - Full Control - This key and subkeys\nALL APPLICATION PACKAGES - Read - This key and subkeys\n\nHKEY_LOCAL_MACHINE\\SYSTEM\nType - \"Allow\" for all\nInherited from - \"None\" for all\nPrincipal - Access - Applies to\nUsers - Read - This key and subkeys\nAdministrators - Full Control - This key and subkeys\nSYSTEM - Full Control - This key and subkeys\nCREATOR OWNER - Full Control - This key and subkeys\nALL APPLICATION PACKAGES - Read - This key and subkeys\n\nMicrosoft has also given Read permission to the SOFTWARE and SYSTEM registry keys in later versions of Windows 10 to the following SID.\n\nS-1-15-3-1024-1065365936-1281604716-3511738428-1654721687-432734479-3232135806-4053264122-3456934681",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The registry is integral to the function, security, and stability of the Windows system.  Changing the system's registry permissions allows the possibility of unauthorized and anonymous modification to the operating system.",
                    "check_content": "Verify the default registry permissions for the keys note below of the HKEY_LOCAL_MACHINE hive.\n\nIf any non-privileged groups such as Everyone, Users or Authenticated Users have greater than Read permission, this is a finding.\n\nRun \"Regedit\".\nRight click on the registry areas noted below.\nSelect \"Permissions...\" and the \"Advanced\" button.\n\nHKEY_LOCAL_MACHINE\\SECURITY\nType - \"Allow\" for all\nInherited from - \"None\" for all\nPrincipal - Access - Applies to\nSYSTEM - Full Control - This key and subkeys\nAdministrators - Special - This key and subkeys\n\nHKEY_LOCAL_MACHINE\\SOFTWARE\nType - \"Allow\" for all\nInherited from - \"None\" for all\nPrincipal - Access - Applies to\nUsers - Read - This key and subkeys\nAdministrators - Full Control - This key and subkeys\nSYSTEM - Full Control - This key and subkeys\nCREATOR OWNER - Full Control - This key and subkeys\nALL APPLICATION PACKAGES - Read - This key and subkeys\n\nHKEY_LOCAL_MACHINE\\SYSTEM\nType - \"Allow\" for all\nInherited from - \"None\" for all\nPrincipal - Access - Applies to\nUsers - Read - This key and subkeys\nAdministrators - Full Control - This key and subkeys\nSYSTEM - Full Control - This key and subkeys\nCREATOR OWNER - Full Control - This key and subkeys\nALL APPLICATION PACKAGES - Read - This key and subkeys\n\nOther subkeys under the noted keys may also be sampled. There may be some instances where non-privileged groups have greater than Read permission.\n\nMicrosoft has given Read permission to the SOFTWARE and SYSTEM registry keys in later versions of Windows 10 to the following SID, this is currently not a finding.\n\nS-1-15-3-1024-1065365936-1281604716-3511738428-1654721687-432734479-3232135806-4053264122-3456934681\n\nIf the defaults have not been changed, these are not a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78083",
                        "V-63593"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220907",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "7bdcd074-fee5-4a15-8907-f9141afad9b3",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220908",
                    "rule_id": "SV-220908r569187",
                    "rule_id_src": "SV-220908r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000005",
                    "group_title": "The built-in administrator account must be disabled.",
                    "rule_title": "The built-in administrator account must be disabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Accounts: Administrator account status\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The built-in administrator account is a well-known account subject to attack.  It also provides no accountability to individual administrators on a system.  It must be disabled to prevent its use.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options.\n\nIf the value for \"Accounts: Administrator account status\" is not set to \"Disabled\", this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78091",
                        "V-63601"
                    ],
                    "ccis": [
                        "CCI-000764"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220908",
                            "title": "SRG-OS-000104-GPOS-00051",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "8e0953be-389a-4925-a35d-5dedbd04b2a9",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220909",
                    "rule_id": "SV-220909r569187",
                    "rule_id_src": "SV-220909r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000010",
                    "group_title": "The built-in guest account must be disabled.",
                    "rule_title": "The built-in guest account must be disabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Accounts: Guest account status\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "A system faces an increased vulnerability threat if the built-in guest account is not disabled.  This account is a known account that exists on all Windows systems and cannot be deleted.  This account is initialized during the installation of the operating system with no password assigned.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options.\n\nIf the value for \"Accounts: Guest account status\" is not set to \"Disabled\", this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63611",
                        "SV-78101"
                    ],
                    "ccis": [
                        "CCI-000804"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220909",
                            "title": "SRG-OS-000121-GPOS-00062",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "1f187fd8-f6c7-4196-ab5c-6c1bf365ac9d",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220910",
                    "rule_id": "SV-220910r569187",
                    "rule_id_src": "SV-220910r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000015",
                    "group_title": "Local accounts with blank passwords must be restricted to prevent access from the network.",
                    "rule_title": "Local accounts with blank passwords must be restricted to prevent access from the network.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Accounts: Limit local account use of blank passwords to console logon only\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "An account without a password can allow unauthorized access to a system as only the username would be required.  Password policies should prevent accounts with blank passwords from existing on a system.  However, if a local account with a blank password did exist, enabling this setting will prevent network access, limiting the account to local console logon only.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Control\\Lsa\\\n\nValue Name: LimitBlankPasswordUse\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63617",
                        "SV-78107"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220910",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "b10c615a-ec2c-4ca1-bc1d-18e40acbab89",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220911",
                    "rule_id": "SV-220911r569187",
                    "rule_id_src": "SV-220911r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000020",
                    "group_title": "The built-in administrator account must be renamed.",
                    "rule_title": "The built-in administrator account must be renamed.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Accounts: Rename administrator account\" to a name other than \"Administrator\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The built-in administrator account is a well-known account subject to attack.  Renaming this account to an unidentified name improves the protection of this account and the system.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options.\n\nIf the value for \"Accounts: Rename administrator account\" is set to \"Administrator\", this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78109",
                        "V-63619"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220911",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "f6544b01-6448-453e-b1b1-792a094a7024",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220912",
                    "rule_id": "SV-220912r569187",
                    "rule_id_src": "SV-220912r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000025",
                    "group_title": "The built-in guest account must be renamed.",
                    "rule_title": "The built-in guest account must be renamed.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Accounts: Rename guest account\" to a name other than \"Guest\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The built-in guest account is a well-known user account on all Windows systems and, as initially installed, does not require a password.  This can allow access to system resources by unauthorized users.  Renaming this account to an unidentified name improves the protection of this account and the system.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options.\n\nIf the value for \"Accounts: Rename guest account\" is set to \"Guest\", this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78115",
                        "V-63625"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220912",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "3c75b38e-dda7-40b2-8258-826b67624765",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220913",
                    "rule_id": "SV-220913r569187",
                    "rule_id_src": "SV-220913r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000030",
                    "group_title": "Audit policy using subcategories must be enabled.",
                    "rule_title": "Audit policy using subcategories must be enabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Audit: Force audit policy subcategory settings (Windows Vista or later) to override audit policy category settings\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks.  Audit logs are necessary to provide a trail of evidence in case the system or network is compromised.  Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.  This setting allows administrators to enable more precise auditing capabilities.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Control\\Lsa\\\n\nValue Name: SCENoApplyLegacyAuditPolicy\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63635",
                        "SV-78125"
                    ],
                    "ccis": [
                        "CCI-000169"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220913",
                            "title": "SRG-OS-000062-GPOS-00031",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "79135006-9269-497b-9bd4-ed66cba4faba",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220914",
                    "rule_id": "SV-220914r852008",
                    "rule_id_src": "SV-220914r852008_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000035",
                    "group_title": "Outgoing secure channel traffic must be encrypted or signed.",
                    "rule_title": "Outgoing secure channel traffic must be encrypted or signed.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Domain member: Digitally encrypt or sign secure channel data (always)\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Requests sent on the secure channel are authenticated, and sensitive information (such as passwords) is encrypted, but not all information is encrypted.  If this policy is enabled, outgoing secure channel traffic will be encrypted and signed.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Services\\Netlogon\\Parameters\\\n\nValue Name: RequireSignOrSeal\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63639",
                        "SV-78129"
                    ],
                    "ccis": [
                        "CCI-002418",
                        "CCI-002421"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220914",
                            "title": "SRG-OS-000423-GPOS-00187",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "73579ab1-9e30-46f2-a3d4-616852a764c5",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220915",
                    "rule_id": "SV-220915r852009",
                    "rule_id_src": "SV-220915r852009_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000040",
                    "group_title": "Outgoing secure channel traffic must be encrypted when possible.",
                    "rule_title": "Outgoing secure channel traffic must be encrypted when possible.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Domain member: Digitally encrypt secure channel data (when possible)\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Requests sent on the secure channel are authenticated, and sensitive information (such as passwords) is encrypted, but not all information is encrypted.  If this policy is enabled, outgoing secure channel traffic will be encrypted.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Services\\Netlogon\\Parameters\\\n\nValue Name: SealSecureChannel\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78133",
                        "V-63643"
                    ],
                    "ccis": [
                        "CCI-002418",
                        "CCI-002421"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220915",
                            "title": "SRG-OS-000423-GPOS-00187",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "7c1c680c-a9a1-40d3-a8f4-89262faad6f2",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220916",
                    "rule_id": "SV-220916r852010",
                    "rule_id_src": "SV-220916r852010_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000045",
                    "group_title": "Outgoing secure channel traffic must be signed when possible.",
                    "rule_title": "Outgoing secure channel traffic must be signed when possible.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Domain member: Digitally sign secure channel data (when possible)\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Requests sent on the secure channel are authenticated, and sensitive information (such as passwords) is encrypted, but the channel is not integrity checked.  If this policy is enabled, outgoing secure channel traffic will be signed.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Services\\Netlogon\\Parameters\\\n\nValue Name: SignSecureChannel\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78137",
                        "V-63647"
                    ],
                    "ccis": [
                        "CCI-002418",
                        "CCI-002421"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220916",
                            "title": "SRG-OS-000423-GPOS-00187",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "6bb8570a-44d5-4652-905b-0bb47843274c",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220917",
                    "rule_id": "SV-220917r569187",
                    "rule_id_src": "SV-220917r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-SO-000050",
                    "group_title": "The computer account password must not be prevented from being reset.",
                    "rule_title": "The computer account password must not be prevented from being reset.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Domain member: Disable machine account password changes\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Computer account passwords are changed automatically on a regular basis.  Disabling automatic password changes can make the system more vulnerable to malicious access.  Frequent password changes can be a significant safeguard for your system.  A new password for the computer account will be generated every 30 days.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Services\\Netlogon\\Parameters\\\n\nValue Name: DisablePasswordChange\n\nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63653",
                        "SV-78143"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220917",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "019fb6f3-74b9-474f-af06-c94aadc9d53f",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220918",
                    "rule_id": "SV-220918r569187",
                    "rule_id_src": "SV-220918r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-SO-000055",
                    "group_title": "The maximum age for machine account passwords must be configured to 30 days or less.",
                    "rule_title": "The maximum age for machine account passwords must be configured to 30 days or less.",
                    "fix_text": "This is the default configuration for this setting (30 days).\n\nConfigure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Domain member: Maximum machine account password age\" to \"30\" or less (excluding 0 which is unacceptable).",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Computer account passwords are changed automatically on a regular basis.  This setting controls the maximum password age that a machine account may have.  This setting must be set to no more than 30 days, ensuring the machine changes its password monthly.",
                    "check_content": "This is the default configuration for this setting (30 days).\n\nIf the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Services\\Netlogon\\Parameters\\\n\nValue Name: MaximumPasswordAge\n\nValue Type: REG_DWORD\nValue: 0x0000001e (30)  (or less, excluding 0)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78151",
                        "V-63661"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220918",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "96cc2530-b672-4ce6-9016-48cc41ace9df",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220919",
                    "rule_id": "SV-220919r852011",
                    "rule_id_src": "SV-220919r852011_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000060",
                    "group_title": "The system must be configured to require a strong session key.",
                    "rule_title": "The system must be configured to require a strong session key.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Domain member: Require strong (Windows 2000 or Later) session key\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "A computer connecting to a domain controller will establish a secure channel.  Requiring strong session keys enforces 128-bit encryption between systems.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Services\\Netlogon\\Parameters\\\n\nValue Name: RequireStrongKey\n\nValue Type: REG_DWORD\nValue: 1\n \nWarning: This setting may prevent a system from being joined to a domain if not configured consistently between systems.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63665",
                        "SV-78155"
                    ],
                    "ccis": [
                        "CCI-002418",
                        "CCI-002421"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220919",
                            "title": "SRG-OS-000423-GPOS-00187",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "e37993bd-b25a-41e3-ac30-9127b7bcef7c",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220920",
                    "rule_id": "SV-220920r569187",
                    "rule_id_src": "SV-220920r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000070",
                    "group_title": "The machine inactivity limit must be set to 15 minutes, locking the system with the screensaver.",
                    "rule_title": "The machine inactivity limit must be set to 15 minutes, locking the system with the screensaver.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Interactive logon: Machine inactivity limit\" to \"900\" seconds\" or less, excluding \"0\" which is effectively disabled.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Unattended systems are susceptible to unauthorized use and should be locked when unattended.  The screen saver should be set at a maximum of 15 minutes and be password protected.  This protects critical and sensitive data from exposure to unauthorized personnel with physical access to the computer.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\\n\nValue Name: InactivityTimeoutSecs\n\nValue Type: REG_DWORD\nValue: 0x00000384 (900) (or less, excluding \"0\" which is effectively disabled)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78159",
                        "V-63669"
                    ],
                    "ccis": [
                        "CCI-000057"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220920",
                            "title": "SRG-OS-000029-GPOS-00010",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "fdce51fd-28a3-4ff9-b70e-102b2466236c",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220921",
                    "rule_id": "SV-220921r569187",
                    "rule_id_src": "SV-220921r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000075",
                    "group_title": "The required legal notice must be configured to display before console logon.",
                    "rule_title": "The required legal notice must be configured to display before console logon.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Interactive logon: Message text for users attempting to log on\" to the following.\n\nYou are accessing a U.S. Government (USG) Information System (IS) that is provided for USG-authorized use only.\n\nBy using this IS (which includes any device attached to this IS), you consent to the following conditions:\n\n-The USG routinely intercepts and monitors communications on this IS for purposes including, but not limited to, penetration testing, COMSEC monitoring, network operations and defense, personnel misconduct (PM), law enforcement (LE), and counterintelligence (CI) investigations.\n\n-At any time, the USG may inspect and seize data stored on this IS.\n\n-Communications using, or data stored on, this IS are not private, are subject to routine monitoring, interception, and search, and may be disclosed or used for any USG-authorized purpose.\n\n-This IS includes security measures (e.g., authentication and access controls) to protect USG interests--not for your personal benefit or privacy.\n\n-Notwithstanding the above, using this IS does not constitute consent to PM, LE or CI investigative searching or monitoring of the content of privileged communications, or work product, related to personal representation or services by attorneys, psychotherapists, or clergy, and their assistants.  Such communications and work product are private and confidential.  See User Agreement for details.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Failure to display the logon banner prior to a logon attempt will negate legal proceedings resulting from unauthorized access to system resources.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\\n\nValue Name: LegalNoticeText\n\nValue Type: REG_SZ\nValue: \nYou are accessing a U.S. Government (USG) Information System (IS) that is provided for USG-authorized use only.\n\nBy using this IS (which includes any device attached to this IS), you consent to the following conditions:\n\n-The USG routinely intercepts and monitors communications on this IS for purposes including, but not limited to, penetration testing, COMSEC monitoring, network operations and defense, personnel misconduct (PM), law enforcement (LE), and counterintelligence (CI) investigations.\n\n-At any time, the USG may inspect and seize data stored on this IS.\n\n-Communications using, or data stored on, this IS are not private, are subject to routine monitoring, interception, and search, and may be disclosed or used for any USG-authorized purpose.\n\n-This IS includes security measures (e.g., authentication and access controls) to protect USG interests--not for your personal benefit or privacy.\n\n-Notwithstanding the above, using this IS does not constitute consent to PM, LE or CI investigative searching or monitoring of the content of privileged communications, or work product, related to personal representation or services by attorneys, psychotherapists, or clergy, and their assistants.  Such communications and work product are private and confidential.  See User Agreement for details.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63675",
                        "SV-78165"
                    ],
                    "ccis": [
                        "CCI-000048",
                        "CCI-000050",
                        "CCI-001384",
                        "CCI-001385",
                        "CCI-001386",
                        "CCI-001387",
                        "CCI-001388"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220921",
                            "title": "SRG-OS-000023-GPOS-00006",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "e2a42087-f17f-4f33-b82d-6297a5fb0672",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220922",
                    "rule_id": "SV-220922r569187",
                    "rule_id_src": "SV-220922r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-SO-000080",
                    "group_title": "The Windows dialog box title for the legal banner must be configured.",
                    "rule_title": "The Windows dialog box title for the legal banner must be configured.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Interactive logon: Message title for users attempting to log on\" to \"DoD Notice and Consent Banner\", \"US Department of Defense Warning Statement\", or a site-defined equivalent.\n\nIf a site-defined title is used, it can in no case contravene or modify the language of the banner text required in WN10-SO-000075.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Failure to display the logon banner prior to a logon attempt will negate legal proceedings resulting from unauthorized access to system resources.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\\n\nValue Name: LegalNoticeCaption\n\nValue Type: REG_SZ\nValue: See message title above\n\n\"DoD Notice and Consent Banner\", \"US Department of Defense Warning Statement\" or a site-defined equivalent, this is a finding.\n\nIf a site-defined title is used, it can in no case contravene or modify the language of the banner text required in WN10-SO-000075.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78171",
                        "V-63681"
                    ],
                    "ccis": [
                        "CCI-000048",
                        "CCI-001384",
                        "CCI-001385",
                        "CCI-001386",
                        "CCI-001387",
                        "CCI-001388"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220922",
                            "title": "SRG-OS-000023-GPOS-00006",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "bd97b702-9097-4ece-a153-0ad3d7fe2b37",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220923",
                    "rule_id": "SV-220923r569187",
                    "rule_id_src": "SV-220923r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-SO-000085",
                    "group_title": "Caching of logon credentials must be limited.",
                    "rule_title": "Caching of logon credentials must be limited.",
                    "fix_text": "This is the default configuration for this setting (10 logons to cache).\n\nConfigure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Interactive logon: Number of previous logons to cache (in case domain controller is not available)\" to \"10\" logons or less.\n\nThis setting only applies to domain-joined systems, however, it is configured by default on all systems.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The default Windows configuration caches the last logon credentials for users who log on interactively to a system.  This feature is provided for system availability reasons, such as the user's machine being disconnected from the network or domain controllers being unavailable.  Even though the credential cache is well-protected, if a system is attacked, an unauthorized individual may isolate the password to a domain user account using a password-cracking program and gain access to the domain.",
                    "check_content": "This is the default configuration for this setting (10 logons to cache).\n\nIf the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive:  HKEY_LOCAL_MACHINE \nRegistry Path:  \\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon\\\n\nValue Name:  CachedLogonsCount\n\nValue Type:  REG_SZ\nValue:  10 (or less)\n\nThis setting only applies to domain-joined systems, however, it is configured by default on all systems.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78177",
                        "V-63687"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220923",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "6cc23cbe-5f48-418d-8321-13c6c7ddcf79",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220924",
                    "rule_id": "SV-220924r569187",
                    "rule_id_src": "SV-220924r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000095",
                    "group_title": "The Smart Card removal option must be configured to Force Logoff or Lock Workstation.",
                    "rule_title": "The Smart Card removal option must be configured to Force Logoff or Lock Workstation.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Interactive logon: Smart card removal behavior\" to  \"Lock Workstation\" or \"Force Logoff\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Unattended systems are susceptible to unauthorized use and must be locked.  Configuring a system to lock when a smart card is removed will ensure the system is inaccessible when unattended.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive:  HKEY_LOCAL_MACHINE\nRegistry Path:  \\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon\\\n\nValue Name:  SCRemoveOption\n\nValue Type:  REG_SZ\nValue:  1 (Lock Workstation) or 2 (Force Logoff)\n\nThis can be left not configured or set to \"No action\" on workstations with the following conditions.  This must be documented with the ISSO.\n-The setting cannot be configured due to mission needs, or because it interferes with applications.\n-Policy must be in place that users manually lock workstations when leaving them unattended.\n-The screen saver is properly configured to lock as required.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63697",
                        "SV-78187"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220924",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "b596c56c-845b-4a8a-99f5-a678fc66a2d8",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220925",
                    "rule_id": "SV-220925r852012",
                    "rule_id_src": "SV-220925r852012_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000100",
                    "group_title": "The Windows SMB client must be configured to always perform SMB packet signing.",
                    "rule_title": "The Windows SMB client must be configured to always perform SMB packet signing.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Microsoft network client: Digitally sign communications (always)\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The server message block (SMB) protocol provides the basis for many network operations.  Digitally signed SMB packets aid in preventing man-in-the-middle attacks.  If this policy is enabled, the SMB client will only communicate with an SMB server that performs SMB packet signing.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Services\\LanmanWorkstation\\Parameters\\\n\nValue Name: RequireSecuritySignature\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63703",
                        "SV-78193"
                    ],
                    "ccis": [
                        "CCI-002418",
                        "CCI-002421"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220925",
                            "title": "SRG-OS-000423-GPOS-00187",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "5b4c55e7-d87e-44c1-8c1a-93b532b11bbc",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220926",
                    "rule_id": "SV-220926r877396",
                    "rule_id_src": "SV-220926r877396_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000110",
                    "group_title": "Unencrypted passwords must not be sent to third-party SMB Servers.",
                    "rule_title": "Unencrypted passwords must not be sent to third-party SMB Servers.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Microsoft network client: Send unencrypted password to third-party SMB servers\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Some non-Microsoft SMB servers only support unencrypted (plain text) password authentication.  Sending plain text passwords across the network, when authenticating to an SMB server, reduces the overall security of the environment.  Check with the vendor of the SMB server to see if there is a way to support encrypted password authentication.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive:  HKEY_LOCAL_MACHINE\nRegistry Path:  \\SYSTEM\\CurrentControlSet\\Services\\LanmanWorkstation\\Parameters\\\n\nValue Name:  EnablePlainTextPassword\n\nValue Type:  REG_DWORD\nValue:  0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63711",
                        "SV-78201"
                    ],
                    "ccis": [
                        "CCI-000197"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220926",
                            "title": "SRG-OS-000074-GPOS-00042",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "5cd0e76d-cc00-4dcd-ae18-87385b8be72b",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220927",
                    "rule_id": "SV-220927r852013",
                    "rule_id_src": "SV-220927r852013_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000120",
                    "group_title": "The Windows SMB server must be configured to always perform SMB packet signing.",
                    "rule_title": "The Windows SMB server must be configured to always perform SMB packet signing.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Microsoft network server: Digitally sign communications (always)\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The server message block (SMB) protocol provides the basis for many network operations.  Digitally signed SMB packets aid in preventing man-in-the-middle attacks.  If this policy is enabled, the SMB server will only communicate with an SMB client that performs SMB packet signing.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Services\\LanManServer\\Parameters\\\n\nValue Name: RequireSecuritySignature\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78209",
                        "V-63719"
                    ],
                    "ccis": [
                        "CCI-002418",
                        "CCI-002421"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220927",
                            "title": "SRG-OS-000423-GPOS-00187",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "6dba965a-b180-43c4-8936-78e47b54a78e",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220928",
                    "rule_id": "SV-220928r569187",
                    "rule_id_src": "SV-220928r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-SO-000140",
                    "group_title": "Anonymous SID/Name translation must not be allowed.",
                    "rule_title": "Anonymous SID/Name translation must not be allowed.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Network access: Allow anonymous SID/Name translation\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Allowing anonymous SID/Name translation can provide sensitive information for accessing a system.  Only authorized users must be able to perform such translations.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options.\n\nIf the value for \"Network access: Allow anonymous SID/Name translation\" is not set to \"Disabled\", this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63739",
                        "SV-78229"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220928",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "9758225a-5014-4203-b84f-c7bd5997a8fa",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220929",
                    "rule_id": "SV-220929r569187",
                    "rule_id_src": "SV-220929r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-SO-000145",
                    "group_title": "Anonymous enumeration of SAM accounts must not be allowed.",
                    "rule_title": "Anonymous enumeration of SAM accounts must not be allowed.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Network access: Do not allow anonymous enumeration of SAM accounts\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Anonymous enumeration of SAM accounts allows anonymous log on users (null session connections) to list all accounts names, thus providing a list of potential points to attack the system.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Control\\Lsa\\\n\nValue Name: RestrictAnonymousSAM\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78235",
                        "V-63745"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220929",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "f8acff69-300f-4cd7-9bdc-4409eb1bdbb3",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220930",
                    "rule_id": "SV-220930r569187",
                    "rule_id_src": "SV-220930r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-SO-000150",
                    "group_title": "Anonymous enumeration of shares must be restricted.",
                    "rule_title": "Anonymous enumeration of shares must be restricted.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Network access: Do not allow anonymous enumeration of SAM accounts and shares\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Allowing anonymous logon users (null session connections) to list all account names and enumerate all shared resources can provide a map of potential points to attack the system.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Control\\Lsa\\\n\nValue Name: RestrictAnonymous\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63749",
                        "SV-78239"
                    ],
                    "ccis": [
                        "CCI-001090"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220930",
                            "title": "SRG-OS-000138-GPOS-00069",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "96768a13-338c-4d74-8dea-73c770edf950",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220931",
                    "rule_id": "SV-220931r569187",
                    "rule_id_src": "SV-220931r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000160",
                    "group_title": "The system must be configured to prevent anonymous users from having the same rights as the Everyone group.",
                    "rule_title": "The system must be configured to prevent anonymous users from having the same rights as the Everyone group.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Network access: Let Everyone permissions apply to anonymous users\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Access by anonymous users must be restricted.  If this setting is enabled, then anonymous users have the same rights and permissions as the built-in Everyone group.  Anonymous users must not have these permissions or rights.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Control\\Lsa\\\n\nValue Name: EveryoneIncludesAnonymous\n\nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63755",
                        "SV-78245"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220931",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "9efa10d6-f338-4342-8995-b20353214a42",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220932",
                    "rule_id": "SV-220932r569187",
                    "rule_id_src": "SV-220932r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-SO-000165",
                    "group_title": "Anonymous access to Named Pipes and Shares must be restricted.",
                    "rule_title": "Anonymous access to Named Pipes and Shares must be restricted.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Network access: Restrict anonymous access to Named Pipes and Shares\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Allowing anonymous access to named pipes or shares provides the potential for unauthorized system access.  This setting restricts access to those defined in \"Network access: Named Pipes that can be accessed anonymously\" and \"Network access: Shares that can be accessed anonymously\",  both of which must be blank under other requirements.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Services\\LanManServer\\Parameters\\\n\nValue Name: RestrictNullSessAccess\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78249",
                        "V-63759"
                    ],
                    "ccis": [
                        "CCI-001090"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220932",
                            "title": "SRG-OS-000138-GPOS-00069",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "42f0a03e-f38e-4593-9226-5bd2aa99b7b3",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220933",
                    "rule_id": "SV-220933r877392",
                    "rule_id_src": "SV-220933r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000167",
                    "group_title": "Remote calls to the Security Account Manager (SAM) must be restricted to Administrators.",
                    "rule_title": "Remote calls to the Security Account Manager (SAM) must be restricted to Administrators.",
                    "fix_text": "Navigate to the policy Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Network access: Restrict clients allowed to make remote calls to SAM\".\n\nSelect \"Edit Security\" to configure the \"Security descriptor:\".\n\nAdd \"Administrators\" in \"Group or user names:\" if it is not already listed (this is the default).\n\nSelect \"Administrators\" in \"Group or user names:\".\n\nSelect \"Allow\" for \"Remote Access\" in \"Permissions for \"Administrators\".\n\nClick \"OK\".\n\nThe \"Security descriptor:\" must be populated with \"O:BAG:BAD:(A;;RC;;;BA) for the policy to be enforced.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The Windows Security Account Manager (SAM) stores users' passwords.  Restricting remote rpc connections to the SAM to Administrators helps protect those credentials.",
                    "check_content": "Windows 10 v1507 LTSB version does not include this setting, it is NA for those systems.\n\nIf the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Control\\Lsa\\\n\nValue Name: RestrictRemoteSAM\n\nValue Type: REG_SZ\nValue: O:BAG:BAD:(A;;RC;;;BA)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-86393",
                        "V-71769"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220933",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "ce1f4583-1981-4575-98c6-f292491533e4",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220934",
                    "rule_id": "SV-220934r569187",
                    "rule_id_src": "SV-220934r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000180",
                    "group_title": "NTLM must be prevented from falling back to a Null session.",
                    "rule_title": "NTLM must be prevented from falling back to a Null session.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Network security: Allow LocalSystem NULL session fallback\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "NTLM sessions that are allowed to fall back to Null (unauthenticated) sessions may gain unauthorized access.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Control\\LSA\\MSV1_0\\\n\nValue Name: allownullsessionfallback\n\nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63765",
                        "SV-78255"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220934",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "a7146e52-2254-4005-9f28-50f58d8e4326",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220935",
                    "rule_id": "SV-220935r569187",
                    "rule_id_src": "SV-220935r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000185",
                    "group_title": "PKU2U authentication using online identities must be prevented.",
                    "rule_title": "PKU2U authentication using online identities must be prevented.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Network security: Allow PKU2U authentication requests to this computer to use online identities\" to \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "PKU2U is a peer-to-peer authentication protocol.   This setting prevents online identities from authenticating to domain-joined systems.  Authentication will be centrally managed with Windows user accounts.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Control\\LSA\\pku2u\\\n\nValue Name: AllowOnlineID\n\nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78257",
                        "V-63767"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220935",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "7f00b04c-7dcd-4e30-b7fe-50d73bc8c1ba",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220936",
                    "rule_id": "SV-220936r569187",
                    "rule_id_src": "SV-220936r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000190",
                    "group_title": "Kerberos encryption types must be configured to prevent the use of DES and RC4 encryption suites.",
                    "rule_title": "Kerberos encryption types must be configured to prevent the use of DES and RC4 encryption suites.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Network security: Configure encryption types allowed for Kerberos\" to \"Enabled\" with only the following selected:\n\nAES128_HMAC_SHA1\nAES256_HMAC_SHA1\nFuture encryption types",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Certain encryption types are no longer considered secure.  This setting configures a minimum encryption type for Kerberos, preventing the use of the DES and RC4 encryption suites.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\Kerberos\\Parameters\\\n\nValue Name: SupportedEncryptionTypes\n\nValue Type: REG_DWORD\nValue: 0x7ffffff8 (2147483640)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78285",
                        "V-63795"
                    ],
                    "ccis": [
                        "CCI-000803"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220936",
                            "title": "SRG-OS-000120-GPOS-00061",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "4dc05d82-13cc-4462-9088-71201c1ce333",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220937",
                    "rule_id": "SV-220937r877397",
                    "rule_id_src": "SV-220937r877397_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-SO-000195",
                    "group_title": "The system must be configured to prevent the storage of the LAN Manager hash of passwords.",
                    "rule_title": "The system must be configured to prevent the storage of the LAN Manager hash of passwords.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Network security: Do not store LAN Manager hash value on next password change\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The LAN Manager hash uses a weak encryption algorithm and there are several tools available that use this hash to retrieve account passwords.  This setting controls whether or not a LAN Manager hash of the password is stored in the SAM the next time the password is changed.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Control\\Lsa\\\n\nValue Name: NoLMHash\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78287",
                        "V-63797"
                    ],
                    "ccis": [
                        "CCI-000196"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220937",
                            "title": "SRG-OS-000073-GPOS-00041",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "a19e03ba-e8b9-4398-8a70-0344bd30197d",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220938",
                    "rule_id": "SV-220938r569187",
                    "rule_id_src": "SV-220938r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-SO-000205",
                    "group_title": "The LanMan authentication level must be set to send NTLMv2 response only, and to refuse LM and NTLM.",
                    "rule_title": "The LanMan authentication level must be set to send NTLMv2 response only, and to refuse LM and NTLM.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Network security: LAN Manager authentication level\" to \"Send NTLMv2 response only. Refuse LM & NTLM\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The Kerberos v5 authentication protocol is the default for authentication of users who are logging on to domain accounts.  NTLM, which is less secure, is retained in later Windows versions  for compatibility with clients and servers that are running earlier versions of Windows or applications that still use it.  It is also used to authenticate logons to stand-alone computers that are running later versions.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Control\\Lsa\\\n\nValue Name: LmCompatibilityLevel\n\nValue Type: REG_DWORD\nValue: 5",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78291",
                        "V-63801"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220938",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "8854e9d2-348c-46b5-a410-b2ea695713f4",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220939",
                    "rule_id": "SV-220939r569187",
                    "rule_id_src": "SV-220939r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000210",
                    "group_title": "The system must be configured to the required LDAP client signing level.",
                    "rule_title": "The system must be configured to the required LDAP client signing level.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Network security: LDAP client signing requirements\" to \"Negotiate signing\" at a minimum.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "This setting controls the signing requirements for LDAP clients.  This setting must be set to Negotiate signing or Require signing, depending on the environment and type of LDAP server in use.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Services\\LDAP\\\n\nValue Name: LDAPClientIntegrity\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78293",
                        "V-63803"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220939",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "c49a847d-5b9e-4118-8c3c-26f44fbd6456",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220940",
                    "rule_id": "SV-220940r569187",
                    "rule_id_src": "SV-220940r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000215",
                    "group_title": "The system must be configured to meet the minimum session security requirement for NTLM SSP based clients.",
                    "rule_title": "The system must be configured to meet the minimum session security requirement for NTLM SSP based clients.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Network security: Minimum session security for NTLM SSP based (including secure RPC) clients\" to \"Require NTLMv2 session security\" and \"Require 128-bit encryption\" (all options selected).",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Microsoft has implemented a variety of security support providers for use with RPC sessions.  All of the options must be enabled to ensure the maximum security level.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Control\\Lsa\\MSV1_0\\\n\nValue Name: NTLMMinClientSec\n\nValue Type: REG_DWORD\nValue: 0x20080000 (537395200)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63805",
                        "SV-78295"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220940",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "97776f56-7ec4-4958-93c8-b5bcee029ed3",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220941",
                    "rule_id": "SV-220941r569187",
                    "rule_id_src": "SV-220941r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000220",
                    "group_title": "The system must be configured to meet the minimum session security requirement for NTLM SSP based servers.",
                    "rule_title": "The system must be configured to meet the minimum session security requirement for NTLM SSP based servers.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"Network security: Minimum session security for NTLM SSP based (including secure RPC) servers\" to \"Require NTLMv2 session security\" and \"Require 128-bit encryption\" (all options selected).",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Microsoft has implemented a variety of security support providers for use with RPC sessions.  All of the options must be enabled to ensure the maximum security level.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Control\\Lsa\\MSV1_0\\\n\nValue Name: NTLMMinServerSec\n\nValue Type: REG_DWORD\nValue: 0x20080000 (537395200)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78297",
                        "V-63807"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220941",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "660f3fa0-ac0e-4028-9643-c4089363564a",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220942",
                    "rule_id": "SV-220942r877466",
                    "rule_id_src": "SV-220942r877466_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000230",
                    "group_title": "The system must be configured to use FIPS-compliant algorithms for encryption, hashing, and signing.",
                    "rule_title": "The system must be configured to use FIPS-compliant algorithms for encryption, hashing, and signing.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"System cryptography: Use FIPS compliant algorithms for encryption, hashing, and signing\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "This setting ensures that the system uses algorithms that are FIPS-compliant for encryption, hashing, and signing.  FIPS-compliant algorithms meet specific standards established by the U.S. Government and must be the algorithms used for all OS encryption functions.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Control\\Lsa\\FIPSAlgorithmPolicy\\\n\nValue Name: Enabled\n\nValue Type: REG_DWORD\nValue: 1\n \nWarning: Clients with this setting enabled will not be able to communicate via digitally encrypted or signed protocols with servers that do not support these algorithms.  Both the browser and web server must be configured to use TLS otherwise the browser will not be able to connect to a secure site.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63811",
                        "SV-78301"
                    ],
                    "ccis": [
                        "CCI-002450"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220942",
                            "title": "SRG-OS-000478-GPOS-00223",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "9ec49bae-c93c-440e-9a18-dca28aa0f9b9",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220943",
                    "rule_id": "SV-220943r569187",
                    "rule_id_src": "SV-220943r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-SO-000240",
                    "group_title": "The default permissions of global system objects must be increased.",
                    "rule_title": "The default permissions of global system objects must be increased.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"System objects: Strengthen default permissions of internal system objects (e.g. Symbolic links)\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Windows systems maintain a global list of shared system resources such as DOS device names, mutexes, and semaphores. Each type of object is created with a default DACL that specifies who can access the objects with what permissions. If this policy is enabled, the default DACL is stronger, allowing non-admin users to read shared objects, but not modify shared objects that they did not create.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\\n\nValue Name: ProtectionMode\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78305",
                        "V-63815"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220943",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "8dfab4cd-c3dc-4dd7-89ad-93921c05089d",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220944",
                    "rule_id": "SV-220944r852016",
                    "rule_id_src": "SV-220944r852016_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000245",
                    "group_title": "User Account Control approval mode for the built-in Administrator must be enabled.",
                    "rule_title": "User Account Control approval mode for the built-in Administrator must be enabled.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"User Account Control: Admin Approval Mode for the Built-in Administrator account\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "User Account Control (UAC) is a security mechanism for limiting the elevation of privileges, including administrative accounts, unless authorized.  This setting configures the built-in Administrator account so that it runs in Admin Approval Mode.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\\n\nValue Name: FilterAdministratorToken\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63817",
                        "SV-78307"
                    ],
                    "ccis": [
                        "CCI-002038"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220944",
                            "title": "SRG-OS-000373-GPOS-00157",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "4d810cd6-6f6d-4ecf-86c9-c80a835a8a45",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220945",
                    "rule_id": "SV-220945r569187",
                    "rule_id_src": "SV-220945r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000250",
                    "group_title": "User Account Control must, at minimum, prompt administrators for consent on the secure desktop.",
                    "rule_title": "User Account Control must, at minimum, prompt administrators for consent on the secure desktop.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"User Account Control: Behavior of the elevation prompt for administrators in Admin Approval Mode\" to \"Prompt for consent on the secure desktop\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "User Account Control (UAC) is a security mechanism for limiting the elevation of privileges, including administrative accounts, unless authorized.  This setting configures the elevation requirements for logged on administrators to complete a task that requires raised privileges.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\\n\nValue Name: ConsentPromptBehaviorAdmin\n\nValue Type: REG_DWORD\nValue: 2 (Prompt for consent on the secure desktop)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63819",
                        "SV-78309"
                    ],
                    "ccis": [
                        "CCI-001084"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220945",
                            "title": "SRG-OS-000134-GPOS-00068",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "ba412c10-cce7-4e98-8d1f-ed6244452135",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220946",
                    "rule_id": "SV-220946r890441",
                    "rule_id_src": "SV-220946r890441_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000251",
                    "group_title": "Windows 10 must use multifactor authentication for local and network access to privileged and nonprivileged accounts.",
                    "rule_title": "Windows 10 must use multifactor authentication for local and network access to privileged and nonprivileged accounts.",
                    "fix_text": "For non-domain joined systems, configuring Windows Hello for sign-on options is suggested based on the organization's needs and capabilities.\n \n",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Without the use of multifactor authentication, the ease of access to privileged and nonprivileged functions is greatly increased. \n\nAll domain accounts must be enabled for multifactor authentication with the exception of local emergency accounts. \n\nMultifactor authentication requires using two or more factors to achieve authentication.\n\nFactors include: \n\n1) Something a user knows (e.g., password/PIN);\n\n2) Something a user has (e.g., cryptographic identification device, token); and\n\n3) Something a user is (e.g., biometric).\n\nA privileged account is defined as an information system account with authorizations of a privileged user.\n\nNetwork access is defined as access to an information system by a user (or a process acting on behalf of a user) communicating through a network (e.g., local area network, wide area network, or the internet).\n\nLocal access is defined as access to an organizational information system by a user (or process acting on behalf of a user) communicating through a direct connection without the use of a network.\n\nThe DoD CAC with DoD-approved PKI is an example of multifactor authentication.\n\nSatisfies: SRG-OS-000106-GPOS-00053, SRG-OS-000107-GPOS-00054, SRG-OS-000108-GPOS-00055",
                    "check_content": "If the system is a member of a domain, this is Not Applicable.\n\nIf one of the following settings does not exist and is not populated, this is a finding: \n\nComputer\\HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography\\Calais\\Readers\nComputer\\HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography\\Calais\\SmartCards",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-111577",
                        "V-102627"
                    ],
                    "ccis": [
                        "CCI-000765"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220946",
                            "title": "SRG-OS-000105-GPOS-00052",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "74a9a066-6309-463f-b925-58faa6573cf8",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220947",
                    "rule_id": "SV-220947r852017",
                    "rule_id_src": "SV-220947r852017_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000255",
                    "group_title": "User Account Control must automatically deny elevation requests for standard users.",
                    "rule_title": "User Account Control must automatically deny elevation requests for standard users.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"User Account Control: Behavior of the elevation prompt for standard users\" to \"Automatically deny elevation requests\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "User Account Control (UAC) is a security mechanism for limiting the elevation of privileges, including administrative accounts, unless authorized.  Denying elevation requests from standard user accounts requires tasks that need elevation to be initiated by accounts with administrative privileges.  This ensures correct accounts are used on the system for privileged tasks to help mitigate credential theft.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\\n\nValue Name: ConsentPromptBehaviorUser\n\nValue Type: REG_DWORD\nValue: 0",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78311",
                        "V-63821"
                    ],
                    "ccis": [
                        "CCI-002038"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220947",
                            "title": "SRG-OS-000373-GPOS-00157",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "f8f4f1fa-f9fe-4e4d-aa3e-153be38c1de0",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220948",
                    "rule_id": "SV-220948r569187",
                    "rule_id_src": "SV-220948r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000260",
                    "group_title": "User Account Control must be configured to detect application installations and prompt for elevation.",
                    "rule_title": "User Account Control must be configured to detect application installations and prompt for elevation.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"User Account Control: Detect application installations and prompt for elevation\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "User Account Control (UAC) is a security mechanism for limiting the elevation of privileges, including administrative accounts, unless authorized.  This setting requires Windows to respond to application installation requests by prompting for credentials.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\\n\nValue Name: EnableInstallerDetection\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78315",
                        "V-63825"
                    ],
                    "ccis": [
                        "CCI-001084"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220948",
                            "title": "SRG-OS-000134-GPOS-00068",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "700538d3-ede5-4e6b-82b6-35b0112e0d62",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220949",
                    "rule_id": "SV-220949r569187",
                    "rule_id_src": "SV-220949r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000265",
                    "group_title": "User Account Control must only elevate UIAccess applications that are installed in secure locations.",
                    "rule_title": "User Account Control must only elevate UIAccess applications that are installed in secure locations.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"User Account Control: Only elevate UIAccess applications that are installed in secure locations\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "User Account Control (UAC) is a security mechanism for limiting the elevation of privileges, including administrative accounts, unless authorized.  This setting configures Windows to only allow applications installed in a secure location on the file system, such as the Program Files or the Windows\\System32 folders, to run with elevated privileges.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\\n\nValue Name: EnableSecureUIAPaths\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63827",
                        "SV-78317"
                    ],
                    "ccis": [
                        "CCI-001084"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220949",
                            "title": "SRG-OS-000134-GPOS-00068",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "135b71aa-0868-4d7f-b3e6-8c1c06a925b0",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220950",
                    "rule_id": "SV-220950r852018",
                    "rule_id_src": "SV-220950r852018_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000270",
                    "group_title": "User Account Control must run all administrators in Admin Approval Mode, enabling UAC.",
                    "rule_title": "User Account Control must run all administrators in Admin Approval Mode, enabling UAC.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"User Account Control: Run all administrators in Admin Approval Mode\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "User Account Control (UAC) is a security mechanism for limiting the elevation of privileges, including administrative accounts, unless authorized.  This setting enables UAC.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\\n\nValue Name: EnableLUA\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78319",
                        "V-63829"
                    ],
                    "ccis": [
                        "CCI-002038"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220950",
                            "title": "SRG-OS-000373-GPOS-00157",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "20117b57-a7d3-46fc-8d30-00848062fa5b",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220951",
                    "rule_id": "SV-220951r569187",
                    "rule_id_src": "SV-220951r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000275",
                    "group_title": "User Account Control must virtualize file and registry write failures to per-user locations.",
                    "rule_title": "User Account Control must virtualize file and registry write failures to per-user locations.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> Security Options >> \"User Account Control: Virtualize file and registry write failures to per-user locations\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "User Account Control (UAC) is a security mechanism for limiting the elevation of privileges, including administrative accounts, unless authorized.  This setting configures non-UAC compliant applications to run in virtualized file and registry entries in per-user locations, allowing them to run.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\\n\nValue Name: EnableVirtualization\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78321",
                        "V-63831"
                    ],
                    "ccis": [
                        "CCI-001084"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220951",
                            "title": "SRG-OS-000134-GPOS-00068",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "77d01825-258f-4521-a2c9-c55c07076ca5",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220952",
                    "rule_id": "SV-220952r915610",
                    "rule_id_src": "SV-220952r915610_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-SO-000280",
                    "group_title": "Passwords for enabled local Administrator accounts must be changed at least every 60 days.",
                    "rule_title": "Passwords for enabled local Administrator accounts must be changed at least every 60 days.",
                    "fix_text": "Change the enabled local Administrator account password at least every 60 days. Windows LAPS must be used to change the built-in Administrator account password. Domain-joined systems can configure this to occur more frequently. LAPS will change the password every 30 days by default. \nhttps://techcommunity.microsoft.com/t5/windows-it-pro-blog/by-popular-demand-windows-laps-available-now/ba-p/3788747\nhttps://learn.microsoft.com/en-us/windows-server/identity/laps/laps-overview#windows-laps-supported-platforms-and-azure-ad-laps-preview-status",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "The longer a password is in use, the greater the opportunity for someone to gain unauthorized knowledge of the password. A local Administrator account is not generally used and its password may not be changed as frequently as necessary. Changing the password for enabled Administrator accounts on a regular basis will limit its exposure.\n\nWindows LAPS must be used  to change the built-in Administrator account password.",
                    "check_content": "Review the password last set date for the enabled local Administrator account.\n\nOn the local domain-joined workstation:\n\nOpen \"PowerShell\".\n\nEnter \"Get-LocalUser –Name * | Select-Object *\".\n\nIf the \"PasswordLastSet\" date is greater than \"60\" days old for the local Administrator account for administering the computer/domain, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-99555",
                        "SV-108659"
                    ],
                    "ccis": [
                        "CCI-000199"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220952",
                            "title": "SRG-OS-000076-GPOS-00044",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "28c3f413-f055-4a61-a5c4-37d1bbb17be0",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220954",
                    "rule_id": "SV-220954r569187",
                    "rule_id_src": "SV-220954r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-UC-000015",
                    "group_title": "Toast notifications to the lock screen must be turned off.",
                    "rule_title": "Toast notifications to the lock screen must be turned off.",
                    "fix_text": "Configure the policy value for User Configuration >> Administrative Templates >> Start Menu and Taskbar >> Notifications >> \"Turn off toast notifications on the lock screen\" to \"Enabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Toast notifications that are displayed on the lock screen could display sensitive information to unauthorized personnel.  Turning off this feature will limit access to the information to a logged on user.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding:\n\nRegistry Hive: HKEY_CURRENT_USER\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\CurrentVersion\\PushNotifications\\\n\nValue Name: NoToastApplicationNotificationOnLockScreen\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63839",
                        "SV-78329"
                    ],
                    "ccis": [
                        "CCI-000381"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220954",
                            "title": "SRG-OS-000095-GPOS-00049",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "4982a5c0-09cc-46c7-89e9-db07a3956d9c",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220955",
                    "rule_id": "SV-220955r569187",
                    "rule_id_src": "SV-220955r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UC-000020",
                    "group_title": "Zone information must be preserved when saving attachments.",
                    "rule_title": "Zone information must be preserved when saving attachments.",
                    "fix_text": "The default behavior is for Windows to mark file attachments with their zone information.\n\nIf this needs to be corrected, configure the policy value for User Configuration >> Administrative Templates >> Windows Components >> Attachment Manager >> \"Do not preserve zone information in file attachments\" to \"Not Configured\" or \"Disabled\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Preserving zone of origin (internet, intranet, local, restricted) information on file attachments allows Windows to determine risk.",
                    "check_content": "The default behavior is for Windows to mark file attachments with their zone information.\n\nIf the registry Value Name below does not exist, this is not a finding.\n\nIf it exists and is configured with a value of \"2\", this is not a finding.\n\nIf it exists and is configured with a value of \"1\", this is a finding.\n\nRegistry Hive: HKEY_CURRENT_USER\nRegistry Path: \\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\Attachments\\\n\nValue Name: SaveZoneInformation\n\nValue Type: REG_DWORD\nValue: 0x00000002 (2) (or if the Value Name does not exist)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63841",
                        "SV-78331"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220955",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "74fc11a7-9258-499b-bd09-1b2097aabb63",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220956",
                    "rule_id": "SV-220956r877392",
                    "rule_id_src": "SV-220956r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000005",
                    "group_title": "The Access Credential Manager as a trusted caller user right must not be assigned to any groups or accounts.",
                    "rule_title": "The Access Credential Manager as a trusted caller user right must not be assigned to any groups or accounts.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Access Credential Manager as a trusted caller\" to be defined but containing no entries (blank).",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nAccounts with the \"Access Credential Manager as a trusted caller\" user right may be able to retrieve the credentials of other accounts from Credential Manager.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts are granted the \"Access Credential Manager as a trusted caller\" user right, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63843",
                        "SV-78333"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220956",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "d176dccd-442d-400d-96e6-b2906dddf613",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220957",
                    "rule_id": "SV-220957r569187",
                    "rule_id_src": "SV-220957r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000010",
                    "group_title": "The Access this computer from the network user right must only be assigned to the Administrators and Remote Desktop Users groups.",
                    "rule_title": "The Access this computer from the network user right must only be assigned to the Administrators and Remote Desktop Users groups.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Access this computer from the network\" to only include the following groups or accounts:\n\nAdministrators   \nRemote Desktop Users",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nAccounts with the \"Access this computer from the network\" user right may access resources on the system, and must be limited to those that require it.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts other than the following are granted the \"Access this computer from the network\" user right, this is a finding:\n\nAdministrators\nRemote Desktop Users\n\nIf a domain application account such as for a management tool requires this user right, this would not be a finding.\n\nVendor documentation must support the requirement for having the user right.\n\nThe requirement must be documented with the ISSO.\n\nThe application account, managed at the domain level, must meet requirements for application account passwords, such as length and frequency of changes as defined in the Windows server STIGs.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78335",
                        "V-63845"
                    ],
                    "ccis": [
                        "CCI-000213"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220957",
                            "title": "SRG-OS-000080-GPOS-00048",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "9c9ab011-37a5-474c-b4bf-eabd06f7bb0f",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220958",
                    "rule_id": "SV-220958r877392",
                    "rule_id_src": "SV-220958r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-UR-000015",
                    "group_title": "The Act as part of the operating system user right must not be assigned to any groups or accounts.",
                    "rule_title": "The Act as part of the operating system user right must not be assigned to any groups or accounts.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Act as part of the operating system\" to be defined but containing no entries (blank).",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nAccounts with the \"Act as part of the operating system\" user right can assume the identity of any user and gain access to resources that user is authorized to access.  Any accounts with this right can take complete control of a system.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts (to include administrators), are granted the \"Act as part of the operating system\" user right, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78337",
                        "V-63847"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220958",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "168860f6-9fde-487e-9f3a-54a99a8f1a8f",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220959",
                    "rule_id": "SV-220959r569187",
                    "rule_id_src": "SV-220959r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000025",
                    "group_title": "The Allow log on locally user right must only be assigned to the Administrators and Users groups.",
                    "rule_title": "The Allow log on locally user right must only be assigned to the Administrators and Users groups.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Allow log on locally\" to only include the following groups or accounts:\n\nAdministrators\nUsers",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high-level capabilities.\n\nAccounts with the \"Allow log on locally\" user right can log on interactively to a system.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\n\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts other than the following are granted the \"Allow log on locally\" user right, this is a finding:\n\nAdministrators\nUsers",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63851",
                        "SV-78341"
                    ],
                    "ccis": [
                        "CCI-000213"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220959",
                            "title": "SRG-OS-000080-GPOS-00048",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "d2695da0-a259-479e-a0af-083d032b1a55",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220960",
                    "rule_id": "SV-220960r877392",
                    "rule_id_src": "SV-220960r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000030",
                    "group_title": "The Back up files and directories user right must only be assigned to the Administrators group.",
                    "rule_title": "The Back up files and directories user right must only be assigned to the Administrators group.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Back up files and directories\" to only include the following groups or accounts:\n\nAdministrators",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nAccounts with the \"Back up files and directories\" user right can circumvent file and directory permissions and could allow access to sensitive data.\"",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts other than the following are granted the \"Back up files and directories\" user right, this is a finding:\n\nAdministrators",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63853",
                        "SV-78343"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220960",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "d76a70f0-db70-4e13-9d0c-e3ca2d08df14",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220961",
                    "rule_id": "SV-220961r877392",
                    "rule_id_src": "SV-220961r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000035",
                    "group_title": "The Change the system time user right must only be assigned to Administrators and Local Service and NT SERVICE\\autotimesvc.",
                    "rule_title": "The Change the system time user right must only be assigned to Administrators and Local Service and NT SERVICE\\autotimesvc.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Change the system time\" to only include the following groups or accounts:\n\nAdministrators\nLOCAL SERVICE\nNT SERVICE\\autotimesvc is added in v1909 cumulative update.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nAccounts with the \"Change the system time\" user right can change the system time, which can impact authentication, as well as affect time stamps on event log entries.\n\nThe NT SERVICE\\autotimesvc is added in v1909 cumulative update. ",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts other than the following are granted the \"Change the system time\" user right, this is a finding:\n\nAdministrators\nLOCAL SERVICE\nNT SERVICE\\autotimesvc is added in v1909 cumulative update.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63855",
                        "SV-78345"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220961",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "cf98409b-e5af-48cc-8ccc-2b0de5f61346",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220962",
                    "rule_id": "SV-220962r877392",
                    "rule_id_src": "SV-220962r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000040",
                    "group_title": "The Create a pagefile user right must only be assigned to the Administrators group.",
                    "rule_title": "The Create a pagefile user right must only be assigned to the Administrators group.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Create a pagefile\" to only include the following groups or accounts:\n\nAdministrators",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nAccounts with the \"Create a pagefile\" user right can change the size of a pagefile, which could affect system performance.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts other than the following are granted the \"Create a pagefile\" user right, this is a finding:\n\nAdministrators",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78347",
                        "V-63857"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220962",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "7cfbc4aa-6d46-4d50-bb92-be9f25e4eed9",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220963",
                    "rule_id": "SV-220963r877392",
                    "rule_id_src": "SV-220963r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-UR-000045",
                    "group_title": "The Create a token object user right must not be assigned to any groups or accounts.",
                    "rule_title": "The Create a token object user right must not be assigned to any groups or accounts.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Create a token object\" to be defined but containing no entries (blank).",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nThe \"Create a token object\" user right allows a process to create an access token. This could be used to provide elevated rights and compromise a system.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts are granted the \"Create a token object\" user right, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63859",
                        "SV-78349"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220963",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "fabfbe5f-be9b-4a93-a7dc-31812c230fd4",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220964",
                    "rule_id": "SV-220964r877392",
                    "rule_id_src": "SV-220964r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000050",
                    "group_title": "The Create global objects user right must only be assigned to Administrators, Service, Local Service, and Network Service.",
                    "rule_title": "The Create global objects user right must only be assigned to Administrators, Service, Local Service, and Network Service.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Create global objects\" to only include the following groups or accounts:\n\nAdministrators\nLOCAL SERVICE\nNETWORK SERVICE\nSERVICE",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nAccounts with the \"Create global objects\" user right can create objects that are available to all sessions, which could affect processes in other users' sessions.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts other than the following are granted the \"Create global objects\" user right, this is a finding:\n\nAdministrators\nLOCAL SERVICE\nNETWORK SERVICE\nSERVICE",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63861",
                        "SV-78351"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220964",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "a56ecf70-2c42-4c1f-8e17-725277d1fdb3",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220965",
                    "rule_id": "SV-220965r877392",
                    "rule_id_src": "SV-220965r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000055",
                    "group_title": "The Create permanent shared objects user right must not be assigned to any groups or accounts.",
                    "rule_title": "The Create permanent shared objects user right must not be assigned to any groups or accounts.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Create permanent shared objects\" to be defined but containing no entries (blank).",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nAccounts with the \"Create permanent shared objects\" user right could expose sensitive data by creating shared objects.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts are granted the \"Create permanent shared objects\" user right, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63863",
                        "SV-78353"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220965",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "d0fb13ea-fd18-4fd3-8d3e-49081a5272df",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220966",
                    "rule_id": "SV-220966r877392",
                    "rule_id_src": "SV-220966r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000060",
                    "group_title": "The Create symbolic links user right must only be assigned to the Administrators group.",
                    "rule_title": "The Create symbolic links user right must only be assigned to the Administrators group.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Create symbolic links\" to only include the following groups or accounts:\n\nAdministrators",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nAccounts with the \"Create symbolic links\" user right can create pointers to other objects, which could potentially expose the system to attack.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts other than the following are granted the \"Create symbolic links\" user right, this is a finding:\n\nAdministrators\n\nIf the workstation has an approved use of Hyper-V, such as being used as a dedicated admin workstation using Hyper-V to separate administration and standard user functions, \"NT VIRTUAL MACHINES\\VIRTUAL MACHINE\" may be assigned this user right and is not a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78355",
                        "V-63865"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220966",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "d0a56886-040a-4e00-b823-7e46299f7215",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220967",
                    "rule_id": "SV-220967r877392",
                    "rule_id_src": "SV-220967r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "high",
                    "rule_version": "WN10-UR-000065",
                    "group_title": "The Debug programs user right must only be assigned to the Administrators group.",
                    "rule_title": "The Debug programs user right must only be assigned to the Administrators group.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Debug programs\" to only include the following groups or accounts:\n\nAdministrators",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nAccounts with the \"Debug Programs\" user right can attach a debugger to any process or to the kernel, providing complete access to sensitive and critical operating system components.  This right is given to Administrators in the default configuration.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts other than the following are granted the \"Debug Programs\" user right, this is a finding:\n\nAdministrators",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63869",
                        "SV-78359"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220967",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "0f1bd5d5-d0ee-4550-bb24-55b4ab54fd9c",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220968",
                    "rule_id": "SV-220968r569187",
                    "rule_id_src": "SV-220968r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000070",
                    "group_title": "The Deny access to this computer from the network user right on workstations must be configured to prevent access from highly privileged domain accounts and local accounts on domain systems and unauthenticated access on all systems.",
                    "rule_title": "The Deny access to this computer from the network user right on workstations must be configured to prevent access from highly privileged domain accounts and local accounts on domain systems and unauthenticated access on all systems.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Deny access to this computer from the network\" to include the following.\n\nDomain Systems Only:\nEnterprise Admins group\nDomain Admins group\nLocal account (see Note below)\n\nAll Systems:\nGuests group\n\nPrivileged Access Workstations (PAWs) dedicated to the management of Active Directory are exempt from denying the Enterprise Admins and Domain Admins groups. (See the Windows Privileged Access Workstation STIG for PAW requirements.)\n\nNote: \"Local account\" is a built-in security group used to assign user rights and permissions to all local accounts.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high-level capabilities.\n\nThe \"Deny access to this computer from the network\" right defines the accounts that are prevented from logging on from the network.\n\nIn an Active Directory Domain, denying logons to the Enterprise Admins and Domain Admins groups on lower trust systems helps mitigate the risk of privilege escalation from credential theft attacks, which could lead to the compromise of an entire domain.\n\nLocal accounts on domain-joined systems must also be assigned this right to decrease the risk of lateral movement resulting from credential theft attacks.\n\nThe Guests group must be assigned this right to prevent unauthenticated access.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\n\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf the following groups or accounts are not defined for the \"Deny access to this computer from the network\" right, this is a finding:\n\nDomain Systems Only:\nEnterprise Admins group\nDomain Admins group\nLocal account (see Note below)\n\nAll Systems:\nGuests group\n\nPrivileged Access Workstations (PAWs) dedicated to the management of Active Directory are exempt from denying the Enterprise Admins and Domain Admins groups. (See the Windows Privileged Access Workstation STIG for PAW requirements.)\n\nNote: \"Local account\" is a built-in security group used to assign user rights and permissions to all local accounts.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63871",
                        "SV-78361"
                    ],
                    "ccis": [
                        "CCI-000213"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220968",
                            "title": "SRG-OS-000080-GPOS-00048",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "b35dcb19-537a-4ce3-9138-bfefbeb640c2",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220969",
                    "rule_id": "SV-220969r857200",
                    "rule_id_src": "SV-220969r857200_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000075",
                    "group_title": "The \"Deny log on as a batch job\" user right on domain-joined workstations must be configured to prevent access from highly privileged domain accounts.",
                    "rule_title": "The \"Deny log on as a batch job\" user right on domain-joined workstations must be configured to prevent access from highly privileged domain accounts.",
                    "fix_text": "This requirement is applicable to domain-joined systems. For standalone or nondomain-joined systems, this is NA.\n\nConfigure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Deny log on as a batch job\" to include the following:\n\nDomain Systems Only:\nEnterprise Admin Group\nDomain Admin Group",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high-level capabilities.\n\nThe \"Deny log on as a batch job\" right defines accounts that are prevented from logging on to the system as a batch job, such as Task Scheduler.\n\nIn an Active Directory Domain, denying logons to the Enterprise Admins and Domain Admins groups on lower-trust systems helps mitigate the risk of privilege escalation from credential theft attacks that could lead to the compromise of an entire domain.",
                    "check_content": "This requirement is applicable to domain-joined systems. For standalone or nondomain-joined systems, this is NA.\n\nVerify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf the following groups or accounts are not defined for the \"Deny log on as a batch job\" right, this is a finding.\n\nDomain Systems Only:\nEnterprise Admin Group\nDomain Admin Group",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78363",
                        "V-63873"
                    ],
                    "ccis": [
                        "CCI-000213"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220969",
                            "title": "SRG-OS-000080-GPOS-00048",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "73668ebe-02bf-40e0-978f-a753e4a80de3",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220970",
                    "rule_id": "SV-220970r857203",
                    "rule_id_src": "SV-220970r857203_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000080",
                    "group_title": "The Deny log on as a service user right on Windows 10 domain-joined workstations must be configured to prevent access from highly privileged domain accounts.",
                    "rule_title": "The Deny log on as a service user right on Windows 10 domain-joined workstations must be configured to prevent access from highly privileged domain accounts.",
                    "fix_text": "This requirement is applicable to domain-joined systems. For standalone or nondomain-joined systems, this is NA.\n\nConfigure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Deny log on as a service\" to include the following:\n\nDomain Systems Only:\nEnterprise Admins Group\nDomain Admins Group",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nThe \"Deny log on as a service\" right defines accounts that are denied log on as a service.\n\nIn an Active Directory Domain, denying logons to the Enterprise Admins and Domain Admins groups on lower trust systems helps mitigate the risk of privilege escalation from credential theft attacks which could lead to the compromise of an entire domain.\n\nIncorrect configurations could prevent services from starting and result in a DoS.",
                    "check_content": "This requirement is applicable to domain-joined systems. For standalone or nondomain-joined systems, this is NA.\n\nVerify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf the following groups or accounts are not defined for the \"Deny log on as a service\" right , this is a finding.\n\nDomain Systems Only:\nEnterprise Admins Group\nDomain Admins Group",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63875",
                        "SV-78365"
                    ],
                    "ccis": [
                        "CCI-000213"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220970",
                            "title": "SRG-OS-000080-GPOS-00048",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "dcdb209a-7e99-4b9e-82d8-d006db92a122",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220971",
                    "rule_id": "SV-220971r569187",
                    "rule_id_src": "SV-220971r569187_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000085",
                    "group_title": "The Deny log on locally user right on workstations must be configured to prevent access from highly privileged domain accounts on domain systems and unauthenticated access on all systems.",
                    "rule_title": "The Deny log on locally user right on workstations must be configured to prevent access from highly privileged domain accounts on domain systems and unauthenticated access on all systems.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Deny log on locally\" to include the following.\n\nDomain Systems Only:\nEnterprise Admins Group\nDomain Admins Group\n\nPrivileged Access Workstations (PAWs) dedicated to the management of Active Directory are exempt from denying the Enterprise Admins and Domain Admins groups. (See the Windows Privileged Access Workstation STIG for PAW requirements.)\n\nAll Systems:\nGuests Group",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high-level capabilities.\n\nThe \"Deny log on locally\" right defines accounts that are prevented from logging on interactively.\n\nIn an Active Directory Domain, denying logons to the Enterprise Admins and Domain Admins groups on lower trust systems helps mitigate the risk of privilege escalation from credential theft attacks, which could lead to the compromise of an entire domain.\n\nThe Guests group must be assigned this right to prevent unauthenticated access.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\n\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf the following groups or accounts are not defined for the \"Deny log on locally\" right, this is a finding.\n\nDomain Systems Only:\nEnterprise Admins Group\nDomain Admins Group\n\nPrivileged Access Workstations (PAWs) dedicated to the management of Active Directory are exempt from denying the Enterprise Admins and Domain Admins groups. (See the Windows Privileged Access Workstation STIG for PAW requirements.)\n\nAll Systems:\nGuests Group",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63877",
                        "SV-78367"
                    ],
                    "ccis": [
                        "CCI-000213"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220971",
                            "title": "SRG-OS-000080-GPOS-00048",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "22c1ccab-133d-409e-b213-1150d0b344ca",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220972",
                    "rule_id": "SV-220972r852029",
                    "rule_id_src": "SV-220972r852029_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000090",
                    "group_title": "The Deny log on through Remote Desktop Services user right on Windows 10 workstations must at a minimum be configured to prevent access from highly privileged domain accounts and local accounts on domain systems and unauthenticated access on all systems.",
                    "rule_title": "The Deny log on through Remote Desktop Services user right on Windows 10 workstations must at a minimum be configured to prevent access from highly privileged domain accounts and local accounts on domain systems and unauthenticated access on all systems.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Deny log on through Remote Desktop Services\" to include the following.\n\nIf Remote Desktop Services is not used by the organization, assign the Everyone group this right to prevent all access.\n\nDomain Systems Only:\nEnterprise Admins group\nDomain Admins group\nLocal account (see Note below)\n\nAll Systems:\nGuests group\n\nPrivileged Access Workstations (PAWs) dedicated to the management of Active Directory are exempt from denying the Enterprise Admins and Domain Admins groups. (See the Windows Privileged Access Workstation STIG for PAW requirements.)\n\nNote: \"Local account\" is a built-in security group used to assign user rights and permissions to all local accounts.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high-level capabilities.\n\nThe \"Deny log on through Remote Desktop Services\" right defines the accounts that are prevented from logging on using Remote Desktop Services.\n\nIf Remote Desktop Services is not used by the organization, the Everyone group must be assigned this right to prevent all access.\n\nIn an Active Directory Domain, denying logons to the Enterprise Admins and Domain Admins groups on lower trust systems helps mitigate the risk of privilege escalation from credential theft attacks, which could lead to the compromise of an entire domain.\n\nLocal accounts on domain-joined systems must also be assigned this right to decrease the risk of lateral movement resulting from credential theft attacks.\n\nThe Guests group must be assigned this right to prevent unauthenticated access.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\n\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf the following groups or accounts are not defined for the \"Deny log on through Remote Desktop Services\" right, this is a finding:\n\nIf Remote Desktop Services is not used by the organization, the \"Everyone\" group can replace all of the groups listed below.\n\nDomain Systems Only:\nEnterprise Admins group\nDomain Admins group\nLocal account (see Note below)\n\nAll Systems:\nGuests group\n\nPrivileged Access Workstations (PAWs) dedicated to the management of Active Directory are exempt from denying the Enterprise Admins and Domain Admins groups. (See the Windows Privileged Access Workstation STIG for PAW requirements.)\n\nNote: \"Local account\" is a built-in security group used to assign user rights and permissions to all local accounts.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63879",
                        "SV-78369"
                    ],
                    "ccis": [
                        "CCI-000213",
                        "CCI-002314"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220972",
                            "title": "SRG-OS-000080-GPOS-00048",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "bebf0eef-bd7f-406e-b9f4-3756f5acc19a",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220973",
                    "rule_id": "SV-220973r877392",
                    "rule_id_src": "SV-220973r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000095",
                    "group_title": "The Enable computer and user accounts to be trusted for delegation user right must not be assigned to any groups or accounts.",
                    "rule_title": "The Enable computer and user accounts to be trusted for delegation user right must not be assigned to any groups or accounts.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Enable computer and user accounts to be trusted for delegation\" to be defined but containing no entries (blank).",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nThe \"Enable computer and user accounts to be trusted for delegation\" user right allows the \"Trusted for Delegation\" setting to be changed. This could potentially allow unauthorized users to impersonate other users.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts are granted the \"Enable computer and user accounts to be trusted for delegation\" user right, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63881",
                        "SV-78371"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220973",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "552c2c12-09fe-4e92-b1cb-0cff28bf38ea",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220974",
                    "rule_id": "SV-220974r877392",
                    "rule_id_src": "SV-220974r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000100",
                    "group_title": "The Force shutdown from a remote system user right must only be assigned to the Administrators group.",
                    "rule_title": "The Force shutdown from a remote system user right must only be assigned to the Administrators group.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Force shutdown from a remote system\" to only include the following groups or accounts:\n\nAdministrators",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nAccounts with the \"Force shutdown from a remote system\" user right can remotely shut down a system which could result in a DoS.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts other than the following are granted the \"Force shutdown from a remote system\" user right, this is a finding:\n\nAdministrators",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78373",
                        "V-63883"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220974",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "782de8c1-3b30-4bc6-95df-c442bbed774c",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220975",
                    "rule_id": "SV-220975r877392",
                    "rule_id_src": "SV-220975r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000110",
                    "group_title": "The Impersonate a client after authentication user right must only be assigned to Administrators, Service, Local Service, and Network Service.",
                    "rule_title": "The Impersonate a client after authentication user right must only be assigned to Administrators, Service, Local Service, and Network Service.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Impersonate a client after authentication\" to only include the following groups or accounts:\n\nAdministrators\nLOCAL SERVICE\nNETWORK SERVICE\nSERVICE",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nThe \"Impersonate a client after authentication\" user right allows a program to impersonate another user or account to run on their behalf. An attacker could potentially use this to elevate privileges.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts other than the following are granted the \"Impersonate a client after authentication\" user right, this is a finding:\n\nAdministrators\nLOCAL SERVICE\nNETWORK SERVICE\nSERVICE",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63889",
                        "SV-78379"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220975",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "dd997675-c20d-4744-8f3b-042c55345759",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220976",
                    "rule_id": "SV-220976r877392",
                    "rule_id_src": "SV-220976r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000120",
                    "group_title": "The Load and unload device drivers user right must only be assigned to the Administrators group.",
                    "rule_title": "The Load and unload device drivers user right must only be assigned to the Administrators group.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Load and unload device drivers\" to only include the following groups or accounts:\n\nAdministrators",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nThe \"Load and unload device drivers\" user right allows device drivers to dynamically be loaded on a system by a user. This could potentially be used to install malicious code by an attacker.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts other than the following are granted the \"Load and unload device drivers\" user right, this is a finding:\n\nAdministrators",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78407",
                        "V-63917"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220976",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "f630a49d-9853-49d3-942f-3550c4ee3cb7",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220977",
                    "rule_id": "SV-220977r877392",
                    "rule_id_src": "SV-220977r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000125",
                    "group_title": "The Lock pages in memory user right must not be assigned to any groups or accounts.",
                    "rule_title": "The Lock pages in memory user right must not be assigned to any groups or accounts.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Lock pages in memory\" to be defined but containing no entries (blank).",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nThe \"Lock pages in memory\" user right allows physical memory to be assigned to processes, which could cause performance issues or a DoS.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts are granted the \"Lock pages in memory\" user right, this is a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63925",
                        "SV-78415"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220977",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "24488123-8c75-4829-9503-b0d68b503a93",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220978",
                    "rule_id": "SV-220978r852035",
                    "rule_id_src": "SV-220978r852035_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000130",
                    "group_title": "The Manage auditing and security log user right must only be assigned to the Administrators group.",
                    "rule_title": "The Manage auditing and security log user right must only be assigned to the Administrators group.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Manage auditing and security log\" to only include the following groups or accounts:\n\nAdministrators",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nAccounts with the \"Manage auditing and security log\" user right can manage the security log and change auditing configurations. This could be used to clear evidence of tampering.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts other than the following are granted the \"Manage auditing and security log\" user right, this is a finding:\n\nAdministrators\n\nIf the organization has an \"Auditors\" group the assignment of this group to the user right would not be a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78417",
                        "V-63927"
                    ],
                    "ccis": [
                        "CCI-000162",
                        "CCI-000163",
                        "CCI-000164",
                        "CCI-000171",
                        "CCI-001914"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220978",
                            "title": "SRG-OS-000057-GPOS-00027",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "66813513-415c-4165-8935-91d0137f390f",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220979",
                    "rule_id": "SV-220979r877392",
                    "rule_id_src": "SV-220979r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000140",
                    "group_title": "The Modify firmware environment values user right must only be assigned to the Administrators group.",
                    "rule_title": "The Modify firmware environment values user right must only be assigned to the Administrators group.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Modify firmware environment values\" to only include the following groups or accounts:\n\nAdministrators",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nAccounts with the \"Modify firmware environment values\" user right can change hardware configuration environment variables. This could result in hardware failures or a DoS.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts other than the following are granted the \"Modify firmware environment values\" user right, this is a finding:\n\nAdministrators",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63931",
                        "SV-78421"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220979",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "7c97987b-507b-4c48-a80b-5d631b1dff98",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220980",
                    "rule_id": "SV-220980r877392",
                    "rule_id_src": "SV-220980r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000145",
                    "group_title": "The Perform volume maintenance tasks user right must only be assigned to the Administrators group.",
                    "rule_title": "The Perform volume maintenance tasks user right must only be assigned to the Administrators group.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Perform volume maintenance tasks\" to only include the following groups or accounts:\n\nAdministrators",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nAccounts with the \"Perform volume maintenance tasks\" user right can manage volume and disk configurations. They could potentially delete volumes, resulting in, data loss or a DoS.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts other than the following are granted the \"Perform volume maintenance tasks\" user right, this is a finding:\n\nAdministrators",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78423",
                        "V-63933"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220980",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "11c3ddf1-f46d-4b2a-a5f7-25bf0af96da3",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220981",
                    "rule_id": "SV-220981r877392",
                    "rule_id_src": "SV-220981r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000150",
                    "group_title": "The Profile single process user right must only be assigned to the Administrators group.",
                    "rule_title": "The Profile single process user right must only be assigned to the Administrators group.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Profile single process\" to only include the following groups or accounts:\n\nAdministrators",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nAccounts with the \"Profile single process\" user right can monitor non-system processes performance. An attacker could potentially use this to identify processes to attack.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts other than the following are granted the \"Profile single process\" user right, this is a finding:\n\nAdministrators",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78425",
                        "V-63935"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220981",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "f17c47da-c9ee-4148-8e69-60d38e7dd238",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220982",
                    "rule_id": "SV-220982r877392",
                    "rule_id_src": "SV-220982r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000160",
                    "group_title": "The Restore files and directories user right must only be assigned to the Administrators group.",
                    "rule_title": "The Restore files and directories user right must only be assigned to the Administrators group.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Restore files and directories\" to only include the following groups or accounts:\n\nAdministrators",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nAccounts with the \"Restore files and directories\" user right can circumvent file and directory permissions and could allow access to sensitive data. It could also be used to over-write more current data.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts other than the following are granted the \"Restore files and directories\" user right, this is a finding:\n\nAdministrators",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63939",
                        "SV-78429"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220982",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "8bf43d20-5d3a-4101-bba3-b769609e74ac",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-220983",
                    "rule_id": "SV-220983r877392",
                    "rule_id_src": "SV-220983r877392_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-UR-000165",
                    "group_title": "The Take ownership of files or other objects user right must only be assigned to the Administrators group.",
                    "rule_title": "The Take ownership of files or other objects user right must only be assigned to the Administrators group.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment >> \"Take ownership of files or other objects\" to only include the following groups or accounts:\n\nAdministrators",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Inappropriate granting of user rights can provide system, administrative, and other high level capabilities.\n\nAccounts with the \"Take ownership of files or other objects\" user right can take ownership of objects and make changes.",
                    "check_content": "Verify the effective setting in Local Group Policy Editor.\nRun \"gpedit.msc\".\n\nNavigate to Local Computer Policy >> Computer Configuration >> Windows Settings >> Security Settings >> Local Policies >> User Rights Assignment.\n\nIf any groups or accounts other than the following are granted the \"Take ownership of files or other objects\" user right, this is a finding:\n\nAdministrators",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "SV-78431",
                        "V-63941"
                    ],
                    "ccis": [
                        "CCI-002235"
                    ],
                    "group_tree": [
                        {
                            "id": "V-220983",
                            "title": "SRG-OS-000324-GPOS-00125",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "687e5eb5-943d-412f-9dc0-89a4e81f1b3e",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-250319",
                    "rule_id": "SV-250319r857185",
                    "rule_id_src": "SV-250319r857185_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000050",
                    "group_title": "Hardened UNC paths must be defined to require mutual authentication and integrity for at least the \\\\*\\SYSVOL and \\\\*\\NETLOGON shares.",
                    "rule_title": "Hardened UNC paths must be defined to require mutual authentication and integrity for at least the \\\\*\\SYSVOL and \\\\*\\NETLOGON shares.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Network >> Network Provider >> \"Hardened UNC Paths\" to \"Enabled\" with at least the following configured in \"Hardened UNC Paths:\" (click the \"Show\" button to display).\n\nValue Name: \\\\*\\SYSVOL\nValue: RequireMutualAuthentication=1, RequireIntegrity=1\n\nValue Name: \\\\*\\NETLOGON\nValue: RequireMutualAuthentication=1, RequireIntegrity=1",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Additional security requirements are applied to Universal Naming Convention (UNC) paths specified in Hardened UNC paths before allowing access to them. This aids in preventing tampering with or spoofing of connections to these paths.",
                    "check_content": "This requirement is applicable to domain-joined systems. For standalone or nondomain-joined systems, this is NA.\n\nIf the following registry values do not exist or are not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\NetworkProvider\\HardenedPaths\\\n\nValue Name: \\\\*\\NETLOGON\nValue Type: REG_SZ\nValue: RequireMutualAuthentication=1, RequireIntegrity=1\n\nValue Name: \\\\*\\SYSVOL\nValue Type: REG_SZ\nValue: RequireMutualAuthentication=1, RequireIntegrity=1\n\nAdditional entries would not be a finding.",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [
                        "V-63577",
                        "SV-78067"
                    ],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-250319",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "3ea6b5ca-be51-4784-bf43-6bbec3e07400",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-252896",
                    "rule_id": "SV-252896r821863",
                    "rule_id_src": "SV-252896r821863_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000327",
                    "group_title": "PowerShell Transcription must be enabled on Windows 10.",
                    "rule_title": "PowerShell Transcription must be enabled on Windows 10.",
                    "fix_text": "Configure the policy value for Computer Configuration >> Administrative Templates >> Windows Components >> Windows PowerShell >> \"Turn on PowerShell Transcription\" to \"Enabled\".\n\nSpecify the Transcript output directory to point to a Central Log Server or another secure location to prevent user access.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Maintaining an audit trail of system activity logs can help identify configuration errors, troubleshoot service disruptions, and analyze compromises that have occurred, as well as detect attacks. Audit logs are necessary to provide a trail of evidence in case the system or network is compromised. Collecting this data is essential for analyzing the security of information assets and detecting signs of suspicious and unexpected behavior.\n\nEnabling PowerShell Transcription will record detailed information from the processing of PowerShell commands and scripts. This can provide additional detail when malware has run on a system.",
                    "check_content": "If the following registry value does not exist or is not configured as specified, this is a finding.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\PowerShell\\Transcription\\\n\nValue Name: EnableTranscripting\n\nValue Type: REG_DWORD\nValue: 1",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [],
                    "ccis": [
                        "CCI-000132",
                        "CCI-000134"
                    ],
                    "group_tree": [
                        {
                            "id": "V-252896",
                            "title": "SRG-OS-000041-GPOS-00019",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "ea4bb5cb-706a-4c7e-87dc-0c3a50942ad4",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-252903",
                    "rule_id": "SV-252903r822503",
                    "rule_id_src": "SV-252903r822503_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "low",
                    "rule_version": "WN10-CC-000080",
                    "group_title": "Virtualization-based protection of code integrity must be enabled.",
                    "rule_title": "Virtualization-based protection of code integrity must be enabled.",
                    "fix_text": "Virtualization-based security currently cannot be implemented in VDIs due to specific supporting requirements, including a TPM, UEFI with Secure Boot, and the capability to run the Hyper-V feature within the virtual desktop.\n\nFor VDIs where the virtual desktop instance is deleted or refreshed upon logoff, this is NA.\n\nConfigure the policy value for Computer Configuration >> Administrative Templates >> System >> Device Guard >> \"Turn On Virtualization Based Security\" to \"Enabled\" with \"Enabled with UEFI lock\" or \"Enabled without lock\" selected for \"Virtualization Based Protection of Code Integrity:\".\n\n\"Enabled with UEFI lock\" is preferred as more secure; however, it cannot be turned off remotely through a group policy change if there is an issue.\n\n\"Enabled without lock\" will allow this to be turned off remotely while testing for issues.",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Virtualization-based protection of code integrity enforces kernel mode memory protections and protects Code Integrity validation paths. This isolates the processes from the rest of the operating system and can only be accessed by privileged system software.",
                    "check_content": "Confirm virtualization-based protection of code integrity.\n\nFor devices that support the virtualization based security (VBS) feature for protection of code integrity, this must be enabled. If the system meets the hardware, firmware, and compatible device driver dependencies for enabling virtualization-based protection of code integrity but it is not enabled, this is a CAT II finding.\n\nVirtualization based security currently cannot be implemented in virtual desktop implementations (VDI) due to specific supporting requirements including a TPM, UEFI with Secure Boot, and the capability to run the Hyper-V feature within the virtual desktop.\n\nFor VDIs where the virtual desktop instance is deleted or refreshed upon logoff, this is NA.\n\nRun \"PowerShell\" with elevated privileges (run as administrator).\nEnter the following:\n\"Get-CimInstance -ClassName Win32_DeviceGuard -Namespace root\\Microsoft\\Windows\\DeviceGuard\"\n\nIf \"SecurityServicesRunning\" does not include a value of \"2\" (e.g., \"{1, 2}\"), this is a finding.\n\nAlternately:\n\nRun \"System Information\".\n\nUnder \"System Summary\", verify the following:\nIf \"Virtualization-based Security Services Running\" does not list \"Hypervisor enforced Code Integrity\", this is finding.\n\nThe policy settings referenced in the Fix section will configure the following registry value. However due to hardware requirements, the registry value alone does not ensure proper function.\n\nRegistry Hive: HKEY_LOCAL_MACHINE\nRegistry Path: \\SOFTWARE\\Policies\\Microsoft\\Windows\\DeviceGuard\\\n\nValue Name: HypervisorEnforcedCodeIntegrity\nValue Type: REG_DWORD\nValue: 0x00000001 (1) (Enabled with UEFI lock), or 0x00000002 (2) (Enabled without lock)",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-252903",
                            "title": "SRG-OS-000480-GPOS-00227",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "not_reviewed",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                },
                {
                    "uuid": "1c17a6bf-ee52-4840-819a-2a771f4daac3",
                    "stig_uuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "target_key": null,
                    "stig_ref": null,
                    "group_id": "V-256894",
                    "rule_id": "SV-256894r891287",
                    "rule_id_src": "SV-256894r891287_rule",
                    "weight": "10.0",
                    "classification": "Unclassified",
                    "severity": "medium",
                    "rule_version": "WN10-CC-000391",
                    "group_title": "Internet Explorer must be disabled for Windows 10.",
                    "rule_title": "Internet Explorer must be disabled for Windows 10.",
                    "fix_text": "For Windows 10 semi-annual channel, remove or disable the IE11 application. \r\n\r\nTo disable IE11 as a standalone browser:\r\n\r\nSet the policy value for \"Computer Configuration/Administrative Templates/Windows Components/Internet Explorer/Disable Internet Explorer 11 as a standalone browser\" to \"Enabled\" with the option value set to \"Never\".",
                    "false_positives": "",
                    "false_negatives": "",
                    "discussion": "Internet Explorer 11 (IE11) is no longer supported on Windows 10 semi-annual channel. ",
                    "check_content": "Determine if IE11 is installed or enabled on Windows 10 semi-annual channel.\r\n\r\nIf IE11 is installed or not disabled on Windows 10 semi-annual channel, this is a finding.\r\n\r\nIf IE11 is installed on a unsupported operating system and is enabled or installed, this is a finding.\r\n\r\nFor more information, visit: https://learn.microsoft.com/en-us/lifecycle/faq/internet-explorer-microsoft-edge#what-is-the-lifecycle-policy-for-internet-explorer-",
                    "documentable": "false",
                    "mitigations": "",
                    "potential_impacts": "",
                    "third_party_tools": "",
                    "mitigation_control": "",
                    "responsibility": "",
                    "security_override_guidance": "",
                    "ia_controls": "",
                    "check_content_ref": {
                        "href": "U_MS_Windows_10_STIG_V2R7_Manual-xccdf.xml",
                        "name": "M"
                    },
                    "legacy_ids": [],
                    "ccis": [
                        "CCI-000366"
                    ],
                    "group_tree": [
                        {
                            "id": "V-256894",
                            "title": "SRG-OS-000185-GPOS-00079",
                            "description": "<GroupDescription></GroupDescription>"
                        }
                    ],
                    "createdAt": "2023-08-09T15:36:29.896Z",
                    "updatedAt": "2023-08-09T15:36:29.896Z",
                    "STIGUuid": "84f103f4-9d32-429a-8e2e-a89414b51b66",
                    "status": "open",
                    "overrides": {},
                    "comments": "",
                    "finding_details": ""
                }
            ]
        }
    ],
    "active": false,
    "mode": 2,
    "has_path": true,
    "target_data": {
        "target_type": "Computing",
        "host_name": "",
        "ip_address": "",
        "mac_address": "",
        "fqdn": "",
        "comments": "",
        "role": "None",
        "is_web_database": false,
        "technology_area": "",
        "web_db_site": "",
        "web_db_instance": ""
    }
}
