<?php
include "certain.php";
if ($certain == 'admin' || $certain == 'server') {
	include "conn.php";
	$type = $_POST['type'];
	function select($ready) {
		$query = mysql_query("SELECT * FROM b_sell WHERE b_ready='$ready'");
		while ($row = mysql_fetch_array($query)) {
			if ($row[6] == "0") {
				echo "<tr><td>" . $row[0] . "</td><td>" . $row[1] . "</td><td>" . $row[2] . "</td><td>" . $row[3] . "</td><td>" . $row[4] . "</td><td>" . $row[5] . "</td><td>" . $row[7] . "</td><td>未收书</td></tr>";
			} else {
				echo "<tr><td>" . $row[0] . "</td><td>" . $row[1] . "</td><td>" . $row[2] . "</td><td>" . $row[3] . "</td><td>" . $row[4] . "</td><td>" . $row[5] . "</td><td>" . $row[7] . "</td><td>已收书</td></tr>";
			}
		}
	}

	function selectdate($ready, $date) {
		$query = mysql_query("SELECT * FROM b_sell WHERE b_ready='$ready' AND b_date='$date'");
		while ($row = mysql_fetch_array($query)) {
			if ($row[0] == "") {
				echo "<td>此日无订货单，请换个日期</td>";
			} else {
				if ($row[6] == "0") {
					echo "<tr><td>" . $row[0] . "</td><td>" . $row[1] . "</td><td>" . $row[2] . "</td><td>" . $row[3] . "</td><td>" . $row[4] . "</td><td>" . $row[5] . "</td><td>" . $row[7] . "</td><td>未收书</td></tr>";
				} else {
					echo "<tr><td>" . $row[0] . "</td><td>" . $row[1] . "</td><td>" . $row[2] . "</td><td>" . $row[3] . "</td><td>" . $row[4] . "</td><td>" . $row[5] . "</td><td>" . $row[7] . "</td><td>已收书</td></tr>";
				}
			}
		}
	}

	switch ($type) {
		case '1' :
			select("0");
			break;
		case '2' :
			select("1");
			break;
		case '3' :
			$date = $_POST['date'];
			selectdate("1", $date);
			break;
		case '4' :
			$date = $_POST['date'];
			selectdate("0", $date);
			break;
		case '5' :
			$id = $_POST['id'];
			$ready = $_POST['ready'];
			mysql_query("UPDATE b_sell SET b_ready='$ready' WHERE id='$id' ");
			echo "修改成功";
			break;
		case '6' :
			$remark = $_POST['remark'];
			$id1 = $_POST['id'];
			mysql_query("UPDATE b_sell SET b_admin_remark='$remark' WHERE id='$id1'");
			echo "修改成功";
			break;
		default :
			break;
	}
	mysql_close();
} else {
	echo "cookie保存到期请重新登录";
}
?>