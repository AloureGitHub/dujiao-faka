<div class="sh-footer">

    <div class="layui-row">
        <div class="layui-col-md8 layui-col-md-offset2 layui-col-sm12">
            <div class="layui-card cardcon">
                <div class="layui-card-body">
                    <div class="footer-wrap">
                        <div style="text-align: center">{!! config('webset.footer') !!} </div>
                        <p>Powered by <a href="https://github.com/assimon/dujiaoka" target="_blank">@独角数卡.DJK</a></p>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>

</body>
</html>
<script src="/assets/layui/layui.js"></script>
<script src="/assets/style/js/jquery-3.4.1.min.js"></script>
<script src="/assets/style/js/clipboard/clipboard.min.js"></script>

<script>
    //注意：导航 依赖 element 模块，否则无法进行功能性操作
    layui.use(['element','layer','jquery', ], function () {
        var element = layui.element;
        var layer = layui.layer;
        var layerad = $("#layerad").html();
        if(typeof(layerad)!="undefined"){
            if(layerad.length>0){
                layer.open({
                    type: 1
                    ,title: "温馨提示"
                    ,closeBtn: false
                    ,area: '300px;'
                    ,shade: 0.8
                    ,id: 'AD'
                    ,btn: [ '朕知道了']
                    ,btnAlign: 'c'
                    ,moveType: 1 //拖拽模式，0或者1
                    ,content: '<div style="padding: 10px; line-height: 22px;font-weight: 300;">'+layerad+'</div>'
                });
            }
        }
    })


</script>

