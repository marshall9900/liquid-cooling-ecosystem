# AWS hit by US-East-1 outage after data center thermal event

> 来源: https://www.networkworld.com/article/4168878/aws-hit-by-us-east-1-outage-after-data-center-thermal-event.html
> 媒体: RSS
> 爬取时间: 2026-05-11T09:49:47.147659
> 发布时间: Fri, 08 May 2026 12:06:54 +0000

---

<div id="remove_no_follow">
		<div class="grid grid--cols-10@md grid--cols-8@lg article-column">
					  <div class="col-12 col-10@md col-6@lg col-start-3@lg">
						<div class="article-column__content">
<section class="wp-block-bigbite-multi-title"><div class="container"></div></section>



<p>A power outage triggered by a thermal event inside an Amazon Web Services data center in Northern Virginia disrupted Elastic Compute Cloud (EC2) instances and Elastic Block Store (EBS) volumes in the US-EAST-1 region late on Thursday, the cloud provider confirmed in updates posted to its Health Dashboard.</p>



<p>In an incident report timestamped 5:25 PM PDT (00:25 UTC Friday), AWS said it had spotted issues in the use1-az4 availability zone and confirmed that “EC2 instances and EBS volumes hosted on impacted hardware are affected by the loss of power during the thermal event.” Rising temperatures inside a single data center had caused the impairments, the company said in a <a href="https://health.aws.amazon.com/health/status" rel="noreferrer noopener" target="_blank">statement</a>.</p>



<p>AWS shifted traffic away from the affected zone for most services and warned of longer-than-usual provisioning times.</p>



<p>As the evening progressed, the company struggled to bring temperatures down. By 6:47 PM PDT, AWS warned that “Other AWS services that depend on the affected EC2 instances and EBS volumes in this Availability Zone may also experience impairments,” and at 8:06 PM PDT, it conceded that “progress is slower than originally anticipated,” recommending that customers needing immediate recovery restore from EBS snapshots or launch resources in unaffected zones.</p>



<p>By 10:11 PM PDT, AWS reported “incremental progress to restore cooling systems” but said users were still “experiencing elevated error rates and latencies for some workflows.”</p>



<p>The May 7 incident is not the first time US-EAST-1 has gone down. The region suffered <a href="https://www.networkworld.com/article/4075446/aws-dns-error-hits-dynamodb-causing-problems-for-multiple-services-and-customers.html">two outages</a> in October 2025, including a 15-hour disruption on October 19 and 20 caused by a race condition in DynamoDB’s automated DNS management system that affected over 70 AWS services and produced cascading failures across Slack, Atlassian, Snapchat, and other dependent services. AWS regions in Ohio have also <a href="https://www.networkworld.com/article/971716/aws-suffers-outage-at-its-us-east-2-cloud-region.html">experienced</a> power-related outages tied to EC2 instances in past years.</p>



<h2 class="wp-block-heading" id="customer-services-go-dark">Customer services go dark</h2>



<p>As recovery progressed through the night, AWS confirmed that some services were coming back online faster than others.</p>



<p>“Some AWS services, such as IoT Core, ELB, NAT Gateway, and Redshift, continue to see significant improvements in the recovery of their workflows,” AWS said in a later update. “However, some customers will continue to see their affected EC2 instances and EBS volumes as impaired until we achieve full recovery.”</p>



<p>KoboToolbox, a data collection platform used by humanitarian and development organisations, said its global instance went offline at 00:32 UTC on May 8 because of the AWS infrastructure problem, according to a <a href="https://community.kobotoolbox.org/t/outage-of-global-instance-may-8-2026/76050" rel="noreferrer noopener" target="_blank">community advisory</a> posted by Kobo staff. The platform’s EU instance was unaffected.</p>



<h2 class="wp-block-heading" id="physical-layer-risk-gets-a-fresh-look">Physical-layer risk gets a fresh look</h2>



<p>Such outages are not unique to AWS, said Bhuvie Chhabra, senior principal analyst at Gartner. “All major cloud providers have experienced similar incidents, highlighting the inherent complexity and challenges of operating at hyperscale,” Chhabra said.</p>



<p>The May 7 event raises a question CISOs should not assume away. CISOs should assess “to what degree AZs are located in physically distinct facilities versus coexisting within the same physical data center” and whether each zone has independent power, networking, cooling, and physical security, Chhabra said. Even when virtual instances are redundant across zones, an application will fail if its database is not similarly redundant, he added.</p>



<p>Kaustubh K, practice director at Everest Group, said physical-layer failures should push enterprises to broaden their resilience playbooks. “Physical-layer failures such as power and cooling disruptions highlight that enterprises should extend resilience planning beyond software and cyber risks, particularly for mission-critical applications,” he said. CISOs should identify critical workloads where infrastructure-level disruptions could materially impact operations and ensure appropriate redundancy, failover, and recovery mechanisms are built into the architecture, Kaustubh added.</p>



<h2 class="wp-block-heading" id="concentration-risk-back-in-focus">Concentration risk back in focus</h2>



<p>What sets US-EAST-1 apart from other AWS regions is the weight of global dependencies it carries. Many AWS global services, including Identity and Access Management authentication, CloudFront, Route 53, and DynamoDB Global Tables, depend on US-EAST-1 endpoints even for resources deployed in other regions, AWS confirmed in updates during the October 2025 incident.</p>



<p>US-EAST-1 is a critical global dependency for AWS, and except for Oracle, all hyperscale providers carry some global dependencies, Chhabra said. AWS is unique in publicly documenting these in its Fault Isolation Boundaries white paper. “Reducing the concentration risk to zero is unattainable,” Chhabra said, adding that CISOs must instead manage it through a life cycle approach to third-party risk management, partnering with sourcing, procurement, and vendor management to track changes in the vendor footprint.</p>



<p>“While Availability Zone separation continues to provide an important resilience layer, enterprises running mission-critical workloads should periodically reassess regional concentration risk and validate whether their resilience posture aligns with business continuity expectations,” Kaustubh said.</p>
</div></div></div></div>