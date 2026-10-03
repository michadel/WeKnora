<template>
    <div class="svg-icon-wrapper" :class="extraClasses" :style="{ '--icon-size': size }">
        <div class="svg-icon" v-html="svgContent" :style="{ color: iconColor }"></div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    name: string;
    size?: number | string;
    extraClasses?: string | string[];
}>();

// Import all SVG files statically so Vite can bundle them
import prefixIconSvg from '../assets/img/prefixIcon.svg?raw';
import prefixIconGreenSvg from '../assets/img/prefixIcon-green.svg?raw';
import agentSvg from '../assets/img/agent.svg?raw';
import agentGreenSvg from '../assets/img/agent-green.svg?raw';
import artifactSvg from '../assets/img/artifact.svg?raw';
import artifactGreenSvg from '../assets/img/artifact-green.svg?raw';
import toolboxSvg from '../assets/img/toolbox.svg?raw';
import toolboxGreenSvg from '../assets/img/toolbox-green.svg?raw';
import organizationSvg from '../assets/img/organization.svg?raw';
import organizationGreenSvg from '../assets/img/organization-green.svg?raw';
import organizationGreySvg from '../assets/img/organization-grey.svg?raw';
import settingSvg from '../assets/img/setting.svg?raw';
import settingGreenSvg from '../assets/img/setting-green.svg?raw';
import searchSvg from '../assets/img/search.svg?raw';
import searchGreenSvg from '../assets/img/search-green.svg?raw';
import fileAddGreenSvg from '../assets/img/file-add-green.svg?raw';
import integrationGreenSvg from '../assets/img/integration-green.svg?raw';
import userSvg from '../assets/img/user.svg?raw';
import userGreenSvg from '../assets/img/user-green.svg?raw';
import websearchGlobeGreenSvg from '../assets/img/websearch-globe-green.svg?raw';
import zhishikuSvg from '../assets/img/zhishiku.svg?raw';
import zhishikuGreenSvg from '../assets/img/zhishiku-green.svg?raw';
import logoutSvg from '../assets/img/logout.svg?raw';
import frame3718Svg from '../assets/img/Frame3718.svg?raw';
import uploadSvg from '../assets/img/upload.svg?raw';
import uploadMaskSvg from '../assets/img/upload-mask.svg?raw';

const svgMap: Record<string, string> = {
    'prefixIcon.svg': prefixIconSvg,
    'prefixIcon-green.svg': prefixIconGreenSvg,
    'agent.svg': agentSvg,
    'agent-green.svg': agentGreenSvg,
    'artifact.svg': artifactSvg,
    'artifact-green.svg': artifactGreenSvg,
    'toolbox.svg': toolboxSvg,
    'toolbox-green.svg': toolboxGreenSvg,
    'organization.svg': organizationSvg,
    'organization-green.svg': organizationGreenSvg,
    'organization-grey.svg': organizationGreySvg,
    'setting.svg': settingSvg,
    'setting-green.svg': settingGreenSvg,
    'search.svg': searchSvg,
    'search-green.svg': searchGreenSvg,
    'file-add-green.svg': fileAddGreenSvg,
    'integration-green.svg': integrationGreenSvg,
    'user.svg': userSvg,
    'user-green.svg': userGreenSvg,
    'websearch-globe-green.svg': websearchGlobeGreenSvg,
    'zhishiku.svg': zhishikuSvg,
    'zhishiku-green.svg': zhishikuGreenSvg,
    'logout.svg': logoutSvg,
    'Frame3718.svg': frame3718Svg,
    'upload.svg': uploadSvg,
    'upload-mask.svg': uploadMaskSvg,
};

const svgContent = computed(() => {
    return svgMap[props.name] || '';
});
</script>

<style scoped>
.svg-icon-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size, 20px);
    height: var(--icon-size, 20px);
}

.svg-icon {
    width: 100%;
    height: 100%;
    color: currentColor;
}

.svg-icon :deep(svg) {
    width: 100%;
    height: 100%;
    fill: currentColor;
}

.svg-icon :deep(path),
.svg-icon :deep(circle),
.svg-icon :deep(rect),
.svg-icon :deep(line),
.svg-icon :deep(polyline),
.svg-icon :deep(polygon),
.svg-icon :deep(ellipse) {
    fill: currentColor;
    stroke: currentColor;
}
</style>
