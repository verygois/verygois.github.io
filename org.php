<?php
function h($str)
{
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}
$title = (string)filter_input(INPUT_POST, 'title');
$contents = (string)filter_input(INPUT_POST, 'contents');
$tag = (string)filter_input(INPUT_POST, 'tag');
$url = (string)filter_input(INPUT_POST, 'url');

$fp = fopen('org.csv', 'a+b');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    flock($fp, LOCK_EX);
    fputcsv($fp, [$title, $contents, $tag, $url,]);
    rewind($fp);
}

flock($fp, LOCK_SH);
while ($row = fgetcsv($fp)) {
    $rows[] = $row;
}
flock($fp, LOCK_UN);
fclose($fp);

?>

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <link rel="stylesheet" type="text/css" href="css/org.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="org.js"></script>
    <style type="text/css">
        #pc_menu,
        #mobile_open {
            top: 0;
            left: 0;
        }
    </style>
</head>

<body>
    <div id="menu"></div>

    <div id="readme">
        <form id="org">
            <div class="search-box tag">
                <ul>
                    <li>
                        <input type="radio" name="tag" value="html" id="html">
                        <label for="html" class="label">HTML</label>
                    </li>
                    <li>
                        <input type="radio" name="tag" value="php" id="php">
                        <label for="php" class="label">PHP</label>
                    </li>
                    <li>
                        <input type="radio" name="tag" value="css" id="css">
                        <label for="css" class="label">CSS</label>
                    </li>
                    <li>
                        <input type="radio" name="tag" value="js" id="js">
                        <label for="js" class="label">JavaScript</label>
                    </li>
                </ul>
            </div>
            <div class="reset">
                <input type="reset" name="reset" value="View All" class="reset-button">
            </div>
        </form>

        <ul class="list">
            <?php if (!empty($rows)) : ?>
                <?php foreach ($rows as $row) : ?>
                    <li class="list_item list_toggle" data-tag="<?= h($row[2]) ?>">
                        <span><?= h($row[0]) ?></span>
                        <p><?= h($row[1]) ?></p>
                        <a href="<?= h($row[3]) ?>" target="_blank" rel="noopener noreferrer"></a>
                    </li>
                <?php endforeach; ?>
            <?php else : ?>
                <li class="list_item list_toggle" data-tag="html">
                    <span>Title</span>
                    <p>contents</p>
                </li>
            <?php endif; ?>
        </ul>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript">
        $(function() {
            $("#menu").load("menu.html");
        })
    </script>
</body>

</html>