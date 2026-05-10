# StarlingX 12.0 is right on time for mixed-hardware edge deployments

> 来源: https://www.networkworld.com/article/4166545/starlingx-12-0-is-right-on-time-for-mixed-hardware-edge-deployments.html
> 媒体: RSS
> 爬取时间: 2026-05-07T17:47:27.112125
> 发布时间: Mon, 04 May 2026 14:20:07 +0000

---

<div id="remove_no_follow">
		<div class="grid grid--cols-10@md grid--cols-8@lg article-column">
					  <div class="col-12 col-10@md col-6@lg col-start-3@lg">
						<div class="article-column__content">
<section class="wp-block-bigbite-multi-title"><div class="container"></div></section>



<p>Keeping time across a distributed network is harder than it sounds. The OpenInfra Foundation is now out with StarlingX 12.0, and precision timing support is one of its headline additions.</p>



<p>This is the first major release of 2026 for StarlingX, the open-source distributed cloud platform used by Verizon, Vodafone, T-Systems and KDDI for 5G and O-RAN infrastructure.</p>



<p>StarlingX 12.0 builds on the<a href="https://www.networkworld.com/article/4090214/starlingx-11-0-addresses-edge-security-ipv4-exhaustion-for-massive-deployments.html"> 11.0 update</a> that came out in November. StarlingX is a fully integrated cloud infrastructure platform that combines the Linux kernel, Kubernetes, OpenStack and Ceph for edge and distributed cloud deployments. Key new features in StarlingX 12.0 include:</p>



<ul class="wp-block-list">
<li><strong>Consolidated OIDC authentication</strong>: A single OpenID Connect proxy replaces a fragmented dual-database system, unifying authentication across all platform interfaces.</li>



<li><strong>NetApp storage support</strong>: NetApp is now supported as a standalone storage backend or in combination with Ceph.</li>



<li><strong>Unified Software Management improvements</strong>: Backup and restore operations require fewer steps and avoid restarts and full reinstalls.</li>



<li><strong>PTP Partial Timing Support (PTS)</strong>: Precision timing can now be distributed across deployments where not every node has PTP-capable hardware.</li>
</ul>



<p><br />“Prior to PTS, such nodes would either rely on software timestamping with unpredictable error, require local GNSS (Global Navigation Satellite System), or be excluded from precise-timing workloads altogether,” Matt Peters, senior director of cloud engineering at <a href="https://www.windriver.com/">Wind River</a>, told <em>Network World</em>.</p>



<h2 class="wp-block-heading" id="ptp-partial-timing-support-extends-precision-timing-to-mixed-hardware-deployments">PTP Partial Timing Support extends precision timing to mixed-hardware deployments</h2>



<p>Precision Time Protocol is the mechanism distributed systems use to synchronize clocks to sub-microsecond accuracy across nodes. It underpins 5G radio access networks, O-RAN deployments and a growing range of industrial and financial applications. Until 12.0, StarlingX required PTP-capable hardware on every node in a deployment, making phased hardware rollouts and mixed-fleet environments difficult to support.</p>



<p>“Partial Timing Support (PTS), aligned with<a href="https://www.itu.int/en/ITU-T/studygroups/2022-2024/15/Documents/flyers/Flyer_ITU-T_G.8275.1-.2.pdf"> ITU-T G.8275.2</a>, allows only a subset of the network elements to be PTP-aware while still distributing time to nodes that lack full PTP hardware capability,” Peters said.</p>



<p>The accuracy tradeoff under PTS is defined by the standard. ITU-T G.8275.2 sets a bounded maximum time error of plus or minus 0.5 milliseconds, accepting the presence of non-PTP-aware segments and uncorrected packet delay variation (PDV). Where NIC-level hardware timestamping is available, StarlingX uses it to reduce PDV. Where it is not, Peters noted that timing accuracy is relaxed but bounded rather than uncontrolled.</p>



<p>Compared to Full Timing Support, PTS trades nanosecond or sub-microsecond precision for deployment flexibility. “Application latency is not materially impacted, but time determinism and phase precision are lower,” Peters said. </p>



<p>StarlingX exposes tunable PTP parameters including servo behavior, thresholds and holdover settings, letting operators optimize timing for specific network topologies and PDV characteristics.</p>



<h2 class="wp-block-heading" id="precision-timing-demand-extends-well-beyond-telecom">Precision timing demand extends well beyond telecom</h2>



<p>The PTS addition matters most in deployments that cannot absorb a full hardware refresh before enabling precision timing. Peters identified where demand for PTP support is strongest outside of telecom.</p>



<p>“Beyond telecom, the earliest and strongest driver of PTP adoption has been industrial automation, where time-based control, robotics, machine vision, and TSN require sub-microsecond coordination across distributed systems,” Peters said. “Power grids and utilities are another major driver, using PTP for synchrophasors, protection relays, and fault analysis where microsecond-accurate, traceable timestamps are critical to grid stability.”</p>



<p>Financial services represent additional demand, particularly for high-frequency trading and regulatory timestamping. Peters also cited autonomous and smart transportation systems, where sensor fusion and coordinated decision-making depend on consistent time across nodes.</p>



<h2 class="wp-block-heading" id="user-authentication-gets-a-single-point-of-control">User authentication gets a single point of control</h2>



<p>Prior to 12.0, StarlingX operators managed users across two separate databases. One was a Keystone database for StarlingX APIs and CLIs used to manage infrastructure. The other was an OIDC database for Kubernetes APIs and CLIs covering both additional infrastructure management and hosted application management. Any change to user privileges had to be replicated across both systems.</p>



<p>The 12.0 release consolidates all authenticated endpoints behind a single OpenID Connect proxy.</p>



<p>“With the move to consolidate on using only OIDC authentication for all user-authenticated interfaces, this simplifies operational management of users and user privileges by having to only manage users in a single database,” Greg Waines, a senior member of technical staff at Wind River and a StarlingX Technical Steering Committee member, told<em> Network World</em>.<br /><br />The implementation uses Dex, an open-source OpenID Connect identity provider, deployed and configured automatically at install time. Kubernetes is configured to use OIDC out of the box, making kubectl-based workflows available immediately after deployment. The platform also supports remote OIDC identity providers including those with MFA capability.<br /></p>



<h2 class="wp-block-heading" id="broader-enterprise-positioning-reflects-growing-interest-outside-telecom">Broader enterprise positioning reflects growing interest outside telecom</h2>



<p>StarlingX has its roots in telecom, but the project has always targeted broader use cases, from industrial IoT across factory floors to retail systems spanning thousands of locations to large data center deployments. </p>



<p>The 12.0 release explicitly positions StarlingX as a general-purpose distributed cloud platform, and Waines said that reflects existing momentum rather than a new direction.</p>



<p>“Whether you’re a company looking for a VMware alternative, a factory that reached the stage of starting to modernize their infrastructure, a company in Europe who needs a powerful platform while also prioritizing digital sovereignty, StarlingX delivers the base functionality that you need,” Waines said.</p>
</div></div></div></div>