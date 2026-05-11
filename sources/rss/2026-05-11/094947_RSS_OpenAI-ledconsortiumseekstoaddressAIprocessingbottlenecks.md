# OpenAI-led consortium seeks to address AI processing bottlenecks

> 来源: https://www.networkworld.com/article/4168926/openai-led-consortium-seeks-to-address-ai-processing-bottlenecks.html
> 媒体: RSS
> 爬取时间: 2026-05-11T09:49:47.147285
> 发布时间: Fri, 08 May 2026 14:46:01 +0000

---

<div id="remove_no_follow">
		<div class="grid grid--cols-10@md grid--cols-8@lg article-column">
					  <div class="col-12 col-10@md col-6@lg col-start-3@lg">
						<div class="article-column__content">
<section class="wp-block-bigbite-multi-title"><div class="container"></div></section>



<p>An OpenAI-led consortium of tech giants including <a href="https://www.amd.com/en/blogs/2026/amd-advances-ai-networking-at-scale-with-mrc.html">AMD</a>, Broadcom, Intel, Microsoft, and <a href="https://www.networkworld.com/feed/networking%20protocol%20designed%20to%20address%20network%20congestion">Nvidia</a> have unveiled a new networking protocol designed to address network congestion, a problem that has always existed but has been exacerbated by the massive amounts of data required for AI processing.</p>



<p>The new protocol, called <a href="https://www.opencompute.org/documents/ocp-mrc-1-0-pdf">Multipath Reliable Connection</a> (MRC), is for training models on 100,000+ GPUs by distributing traffic across hundreds of network paths simultaneously rather than forcing it down a few lanes that can get easily congested.</p>



<p>“Network congestion, link, and device failures are the most common sources of delay and jitter in transfers,” OpenAI wrote in a <a href="https://openai.com/index/mrc-supercomputer-networking/">blog post</a> announcing the project. “These problems get more frequent, and harder to solve, as the size of the cluster increases.”</p>



<p>It went on to note that a single failure could often cause a training job to crash, forcing a restart from a saved checkpoint, or stall progress for many seconds while the network recomputed routes. Such interruptions are costly in both GPU cycles and time.</p>



<p>“The larger the job we run, the greater the impact of any single link flap or failure. These workloads act as a form of ‘failure amplifier,’ so preventing this has become critical,” the company said.</p>



<p>OpenAI led the development of the protocol and worked with AMD, Broadcom, Intel, Microsoft, and Nvidia, all of whom made significant technical contributions. The project is hosted and coordinated by the Open Compute Platform (OCP) consortium.</p>



<p>Nvidia is making its presence felt with the use of its Spectrum-X Ethernet as a part of MRC. The <a href="https://blogs.nvidia.com/blog/spectrum-x-ethernet-mrc/">company says</a> it is running MRC in production at some of the world’s largest AI training clusters, including OpenAI, for training frontier LLM models like ChatGPT and Codex.</p>



<p>Spectrum-X is also used in <a href="https://blogs.microsoft.com/blog/2025/09/18/inside-the-worlds-most-powerful-ai-datacenter/" rel="noreferrer noopener" target="_blank">Microsoft’s Fairwater</a> and <a href="https://blogs.oracle.com/cloud-infrastructure/first-principles-multipath-reliable-connection" rel="noreferrer noopener" target="_blank">Oracle Cloud Infrastructure (OCI’s) Abilene</a> data center (a part of <a href="https://www.networkworld.com/article/4029011/ai-project-stargate-struggles-to-get-off-the-ground.html">Project Stargate</a>), two of the largest AI factories purpose-built for training and deploying leading-edge frontier LLMs.</p>



<p>MRC delivers the best GPU utilization possible by load-balancing traffic across all available paths, avoiding congestion by dynamically avoiding overloaded paths in real time. Conventional network fabrics can take seconds or even tens of seconds to stabilize after failures, <a href="https://openai.com/index/mrc-supercomputer-networking/" rel="noreferrer noopener" target="_blank">according to OpenAI</a>.</p>



<p>This helps keep maximum GPU utilization while training runs through network slowdowns, congestion, or failures or other events that would ordinarily disrupt or stall the training process. Administrators also gain fine-grained visibility and control over traffic paths, monitoring network traffic from a simple, single pane of glass.</p>



<p>OpenAI says MRC’s multi-plane network design can connect more than 100,000 GPUs using only two tiers of Ethernet switches, rather than the three or four tiers currently required by standard 800 Gb/s networks.</p>



<p>The <a href="https://www.opencompute.org/documents/ocp-mrc-1-0-pdf" rel="noreferrer noopener" target="_blank">MRC specification was published today through the Open Compute Project</a> along with an accompanying <a href="https://cdn.openai.com/pdf/resilient-ai-supercomputer-networking-using-mrc-and-srv6.pdf" rel="noreferrer noopener" target="_blank">research paper</a>.</p>
</div></div></div></div>