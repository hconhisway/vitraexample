export default function (d3, dom, trailsData, switchingHistory) {
    const screenHeight = window.innerHeight;
    const svgHeight = screenHeight;
    const svgWidth = 900
    let aspectRatioSum = 0.0;
    let widthOfCurrentSelectedImage = 0;
    let heightOfCurrentSelectedImage = 0;
    let positionOfCurrentSelectedImage = new Array(2);
    let currentSelectedImage = null;
    // let selectedImageIndex = -1;
    // let imageHeight;
    const el = d3.select(dom)
        .attr('class', 'imageGallery');
    const svg = el.append('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight)
        .attr("overflow", "visible")
        .style("border-left", "2.7px dashed #FDBB30")
        .style("border-right", "2.7px dashed #FDBB30");
    let obj;

    function init() {
        console.log(trailsData);
        console.log(switchingHistory);
        let imageListRaw = []
        for (const historyUnit in switchingHistory) {
            imageListRaw.push(switchingHistory[historyUnit].imageName)
        }
        let imageList = Array.from(new Set(imageListRaw));
        let loadedImages = 0;
        const imageInfo = new Array(imageList.length);

        imageList.forEach((src, index) => {
            const img = new Image();

            img.onload = function() {
            const width = img.naturalWidth;
            const height = img.naturalHeight;
            const aspectRatio = width / height;
            const asrc = `../assets/img/${src}`;
            // 保存图片信息
            // imageInfo.push({ asrc, width, height, aspectRatio });
            imageInfo[index] = { asrc, width, height, aspectRatio, src };
            // 确保所有图片都加载完成后再执行后续操作
            loadedImages++;
            if (loadedImages === imageList.length) {
                // 所有图片加载完毕，执行后续操作，比如渲染画廊
                renderGallery(imageInfo);
            }
            };
            img.src = `../assets/img/${src}`;
        });


        // let sizeRatio = 1000 / imageData[0].sizeInfo[2];
        // for (let trailBlock of trailsData) {
        //     let trails = trailBlock.trail;
        //     for (let trail of trails) {
        //         trail.currentPoint[0] -= imageData[0].sizeInfo[0];
        //         trail.currentPoint[1] -= imageData[0].sizeInfo[1];
        //         trail.currentPoint[0] *= sizeRatio;
        //         trail.currentPoint[1] *= sizeRatio;
        //     }
        // }
        // svg.append('image')
        //     .attr('xlink:href', '../assets/Screenshot.jpg')
        //     .attr('width', '1000')
        //     .attr('preserveAspectRatio', 'xMidYMid slice')
        //     .attr('x', '0')
        //     .attr('y', '0');
        
        return obj
    };
    function renderGallery(imageInfo) {
        for (const i in imageInfo){
            aspectRatioSum += imageInfo[i].aspectRatio;
        }
        const imageHeight = (svgWidth) / aspectRatioSum;
        svg.selectAll("image")
        .data(imageInfo)
        .enter()
        .append("image")
        .attr("href", d => d.asrc) // 设置图片源
        .attr("width", d => imageHeight * d.aspectRatio) // 设置图片宽度，此处简化处理，固定宽度
        .attr("height", d => imageHeight) // 根据长宽比动态计算高度
        // .attr("x", (svgWidth - imageWidth) * 0.5) // 水平居中
        .attr("x", (d, i, nodes) => {
            let prevWidth = 0;
          for (let j = 0; j < i; j++) {
            prevWidth += imageHeight * nodes[j].__data__.aspectRatio; // 加10作为图片间的间隔
          }
          return prevWidth;
        })
        .attr("data-name", d => d.src)
        .attr("y", 2);

        svg.selectAll("rect")
        .data(imageInfo)
        .enter()
        .append("rect")
        .attr("width", d => imageHeight * d.aspectRatio) // 边框比图片本身宽20px
        .attr("height", d => imageHeight) // 边框比图片本身高20px
        .attr("x", (d, i, nodes) => {
            let prevWidth = 0;
            for (let j = 0; j < i; j++) {
                prevWidth += imageHeight * nodes[j].__data__.aspectRatio; // 加10作为图片间的间隔
            }
            return prevWidth; // 减10以补偿边框宽度，使图片居中于边框
        })
        .attr("y", 2) // 同上，调整y坐标以使图片居中于边框
        .attr("stroke", "#616161") // 设置边框颜色
        .attr("stroke-width", 3.8) // 设置边框宽度
        .attr("rx", 1)
        .attr("ry", 1)
        .attr("fill", "none"); // 确保边框内部不填充颜色
        }

    function chanegLaserTrails(_) {
        if (currentSelectedImage===null || currentSelectedImage==='') {return}
        const trailsCopy = JSON.parse(JSON.stringify(trailsData));
        // console.log(widthOfCurrentSelectedImage, heightOfCurrentSelectedImage, positionOfCurrentSelectedImage);
        const currentImageInfo = switchingHistory.find(item => item.imageName === currentSelectedImage);
        const sizeInfo = currentImageInfo.sizeInfo;
        let sizeRatio = widthOfCurrentSelectedImage / sizeInfo[2];
        console.log(positionOfCurrentSelectedImage, widthOfCurrentSelectedImage, sizeInfo)
        for (let trailBlock of trailsCopy) {
            let trails = trailBlock.trail;
            for (let trail of trails) {
                trail.currentPoint[0] -= sizeInfo[0];
                trail.currentPoint[1] -= sizeInfo[1];
                trail.currentPoint[0] *= sizeRatio;
                trail.currentPoint[1] *= sizeRatio;
                trail.currentPoint[0] += positionOfCurrentSelectedImage[0];
                trail.currentPoint[1] += positionOfCurrentSelectedImage[1];
            }
        }
        
        svg.selectAll(".laser_trails").remove();
        let currentTrails = _.split(',').map(Number);
        for (let trailNum of currentTrails) {
            const trailBlock = trailsCopy[trailNum];
            let trails = trailBlock.trail;
            // console.log(trails)
            let x = d3.scaleLinear().domain([0, 1000]).range([0, 1000]),
            y = d3.scaleLinear().domain([0, 500]).range([0, 500]);
        
            let line = d3.line()
            .curve(d3.curveBasis)
                // .curve(d3.curveCardinal.tension(0.1))
                .x(function(d) { return d.currentPoint[0]; })
                .y(function(d) { return d.currentPoint[1]; });
            
            svg.append("path")
                .attr("class", "laser_trails")
                .datum(trails)
                .attr("fill", "yellow")
                .attr("opacity", "0.5")
                .attr("stroke", "orange")
                .attr("stroke-width", 5)
                .attr("d", line);
        }
    }

    function chanegCurrentVis(_) {
        const images = svg.selectAll('image').data();
        const selectedIndex = images.findIndex(d => d.src === _);
        const selectedImageData = images[selectedIndex];
        const selectedImageHeight = (svgWidth) / aspectRatioSum;
        const selectedImageWidth = selectedImageHeight * selectedImageData.aspectRatio;
        currentSelectedImage = _;
        const svgCenterX = svgWidth / 2;
        const svgCenterY = svgHeight / 2;
        let zoomFactor = (svgWidth-50) / selectedImageWidth; // 放大系数
        if (selectedImageHeight * zoomFactor > svgHeight - 200){
            zoomFactor = (svgHeight-300) / selectedImageHeight; 
        }
        widthOfCurrentSelectedImage = selectedImageWidth *  zoomFactor;
        heightOfCurrentSelectedImage = selectedImageHeight * zoomFactor;
        const displayThreshold = 1;
        svg.selectAll('image')
        .transition()
        .duration(500)
        .attr("x", (d, i, nodes) => {
            if (d.src === _) {
                
                positionOfCurrentSelectedImage[0] = svgCenterX - (selectedImageWidth * zoomFactor) / 2;
                return svgCenterX - (selectedImageWidth * zoomFactor) / 2; // 居中放置
            }
            // 其他图片的位置调整根据需求定义
            let prevWidth = 0;
            for (let j = 0; j < i; j++) {
                prevWidth += selectedImageHeight * nodes[j].__data__.aspectRatio; // 加10作为图片间的间隔
            }
            return prevWidth; // 减10以补偿边框宽度，使图片居中于边框
        })
        .attr("y", (d, i) => {
            if (d.src === _) {
                positionOfCurrentSelectedImage[1] = svgCenterY - (selectedImageHeight * zoomFactor) / 2;
                return svgCenterY - (selectedImageHeight * zoomFactor) / 2; // 居中放置
            }
            // 其他图片的位置调整根据需求定义
            return 2; // 假设d.y是图片原始y位置
        })
        .attr('width', d => d.src === _ ? selectedImageWidth *  zoomFactor: selectedImageHeight * d.aspectRatio)
        .attr('height', d => d.src === _ ? selectedImageHeight * zoomFactor : selectedImageHeight)
        // 更新透明度和显示状态
        // .style('opacity', (d, i) => {
        //     const distance = Math.abs(i - selectedIndex); // 计算距离
        //     return distance > displayThreshold ? 0 : 1; // 根据距离设置透明度
        // })
        // .style('display', (d, i) => {
        //     const distance = Math.abs(i - selectedIndex); // 计算距离
        //     return distance > displayThreshold ? 'none' : 'block'; // 根据距离设置显示状态
        // });
    }

    // function seriesConnectPerform(inputValues) {
    //     console.log(inputValues);
    //     currentSelectedImage = inputValues.get('currentVis');
    //     console.log(currentSelectedImage)
    //     chanegCurrentVis(currentSelectedImage);
    //     // chanegLaserTrails(inputValues.get('laserTrails'));
    // }
    obj = {
        svg,
        init,
        currentVis: chanegCurrentVis,
        laserTrails: chanegLaserTrails,
        // seriesConnect: seriesConnectPerform,
    }
    return init();
    
}